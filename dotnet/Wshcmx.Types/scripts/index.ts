import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "../../..");
const XML_ROOT = path.join(REPO_ROOT, "lib", "xml");
const OUT_DIR = path.join(REPO_ROOT, "dotnet", "Wshcmx.Types", "Generated");
const NAMESPACE = "Wshcmx.Types";

/** How the untyped JS `number` maps to C#. WebTutor `number` fields include decimals. */
const NUMBER_TYPE = "double";

/** Wrapper/framework type names that are not data types themselves. */
const FRAMEWORK_TYPES = new Set([
  "XmlElem",
  "XmlMultiElem",
  "XmlMultiElemObject",
  "XmlTopElem",
  "XmlDocument",
  "XmElem",
  "XmMultiElem",
]);

/** A named object type collected from the declarations. */
interface TypeInfo {
  name: string;
  folder: string;
  members: ts.PropertySignature[];
  bases: string[];
}

const registry = new Map<string, TypeInfo>();
/** Synthetic classes generated for inline anonymous object literals. */
const synthetic = new Map<string, { folder: string; members: ts.PropertySignature[] }>();
const unresolved = new Set<string>();
/** Registered type names referenced as a field type (must be emitted, even if empty). */
const referenced = new Set<string>();

/* ------------------------------------------------------------------ */
/* Collection pass                                                     */
/* ------------------------------------------------------------------ */

function collectFromFile(file: string, folder: string): void {
  const source = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
  );

  for (const stmt of source.statements) {
    if (ts.isInterfaceDeclaration(stmt)) {
      const name = stmt.name.text;
      const bases: string[] = [];
      for (const clause of stmt.heritageClauses ?? []) {
        for (const t of clause.types) {
          const n = typeRefName(t.expression);
          if (n && !FRAMEWORK_TYPES.has(n)) {
            bases.push(n);
          }
        }
      }
      register({ name, folder, members: propertySignatures(stmt.members), bases });
    } else if (ts.isTypeAliasDeclaration(stmt)) {
      const parsed = parseObjectAlias(stmt.type);
      if (!parsed || parsed.isDocumentWrapper) {
        continue;
      }
      register({
        name: stmt.name.text,
        folder,
        members: parsed.members,
        bases: parsed.bases,
      });
    }
  }
}

function register(info: TypeInfo): void {
  if (registry.has(info.name)) {
    return; // global TS scope guarantees unique names; keep first defensively.
  }
  registry.set(info.name, info);
}

function propertySignatures(members: ts.NodeArray<ts.TypeElement>): ts.PropertySignature[] {
  return members.filter(ts.isPropertySignature);
}

/** Extract a plain identifier name from a type reference expression/entity. */
function typeRefName(node: ts.Node): string | undefined {
  if (ts.isIdentifier(node)) {
    return node.text;
  }
  if (ts.isExpressionWithTypeArguments(node)) {
    return typeRefName(node.expression);
  }
  return undefined;
}

interface ParsedAlias {
  members: ts.PropertySignature[];
  bases: string[];
  isDocumentWrapper: boolean;
}

function parseObjectAlias(type: ts.TypeNode): ParsedAlias | undefined {
  const members: ts.PropertySignature[] = [];
  const bases: string[] = [];
  let isDocumentWrapper = false;
  let sawObject = false;

  const visitPart = (part: ts.TypeNode): void => {
    if (ts.isTypeLiteralNode(part)) {
      members.push(...propertySignatures(part.members));
      sawObject = true;
    } else if (ts.isTypeReferenceNode(part)) {
      const n = entityName(part.typeName);
      if (n === "XmlDocument") {
        isDocumentWrapper = true;
      }
      if (n && !FRAMEWORK_TYPES.has(n)) {
        bases.push(n);
      }
      sawObject = true;
    }
  };

  if (ts.isIntersectionTypeNode(type)) {
    for (const part of type.types) {
      visitPart(part);
    }
  } else if (ts.isTypeLiteralNode(type)) {
    visitPart(type);
  } else {
    return undefined; // not an object-shaped alias (e.g. unions / mapped types)
  }

  if (!sawObject) {
    return undefined;
  }
  return { members, bases, isDocumentWrapper };
}

function entityName(name: ts.EntityName): string {
  return ts.isIdentifier(name) ? name.text : name.right.text;
}

/* ------------------------------------------------------------------ */
/* Type mapping                                                        */
/* ------------------------------------------------------------------ */

interface MappedType {
  text: string;
  isCollection: boolean;
}

/** Map a property's type node (the annotation on a PropertySignature) to a C# type. */
function mapPropertyType(node: ts.TypeNode | undefined, owner: string, prop: string): MappedType {
  if (!node) {
    return { text: "object?", isCollection: false };
  }

  if (ts.isTypeReferenceNode(node)) {
    const name = entityName(node.typeName);
    const args = node.typeArguments ?? [];

    if (name === "XmlElem") {
      return { text: mapInner(args[0], owner, prop), isCollection: false };
    }
    if (name === "XmlMultiElem" || name === "XmlMultiElemObject") {
      const inner = stripTrailingNullable(mapInner(args[0], owner, prop));
      return { text: `List<${inner}>`, isCollection: true };
    }
  }

  // Plain (non-wrapped) property, e.g. `name: string;`.
  return { text: mapInner(node, owner, prop), isCollection: false };
}

/** Map the `T` inside `XmlElem<T>` / `XmlMultiElem<T>` (frequently `X | null`). */
function mapInner(node: ts.TypeNode | undefined, owner: string, prop: string): string {
  if (!node) {
    return "object?";
  }

  if (ts.isUnionTypeNode(node)) {
    let nullable = false;
    const concrete: ts.TypeNode[] = [];
    for (const member of node.types) {
      if (isNullish(member)) {
        nullable = true;
      } else {
        concrete.push(member);
      }
    }
    if (concrete.length === 0) {
      return "object?";
    }
    const base = mapScalarOrNamed(concrete[0]!, owner, prop);
    return nullable ? makeNullable(base) : base;
  }

  return mapScalarOrNamed(node, owner, prop);
}

function mapScalarOrNamed(node: ts.TypeNode, owner: string, prop: string): string {
  switch (node.kind) {
    case ts.SyntaxKind.NumberKeyword:
      return NUMBER_TYPE;
    case ts.SyntaxKind.StringKeyword:
      return "string";
    case ts.SyntaxKind.BooleanKeyword:
      return "bool";
    case ts.SyntaxKind.AnyKeyword:
    case ts.SyntaxKind.UnknownKeyword:
    case ts.SyntaxKind.ObjectKeyword:
    case ts.SyntaxKind.VoidKeyword:
    case ts.SyntaxKind.NeverKeyword:
      return "object";
  }

  if (ts.isLiteralTypeNode(node)) {
    const lit = node.literal;
    if (ts.isStringLiteral(lit)) {
      return "string";
    }
    if (ts.isNumericLiteral(lit)) {
      return NUMBER_TYPE;
    }
    if (lit.kind === ts.SyntaxKind.TrueKeyword || lit.kind === ts.SyntaxKind.FalseKeyword) {
      return "bool";
    }
  }

  if (ts.isArrayTypeNode(node)) {
    return `List<${stripTrailingNullable(mapScalarOrNamed(node.elementType, owner, prop))}>`;
  }

  if (ts.isTypeLiteralNode(node)) {
    // Anonymous inline object -> synthesize a nested class.
    const synthName = `${owner}${toPascal(prop)}`;
    if (!synthetic.has(synthName) && !registry.has(synthName)) {
      synthetic.set(synthName, {
        folder: registry.get(owner)?.folder ?? "Misc",
        members: propertySignatures(node.members),
      });
    }
    return synthName;
  }

  if (ts.isTypeReferenceNode(node)) {
    const name = entityName(node.typeName);
    if (name === "Date") {
      return "DateTime";
    }
    if (name === "XmlElem") {
      return mapInner(node.typeArguments?.[0], owner, prop);
    }
    if (name === "XmlMultiElem" || name === "XmlMultiElemObject") {
      return `List<${stripTrailingNullable(mapInner(node.typeArguments?.[0], owner, prop))}>`;
    }
    if (registry.has(name)) {
      referenced.add(name);
      return name;
    }
    unresolved.add(name);
    return "object";
  }

  return "object";
}

function isNullish(node: ts.TypeNode): boolean {
  if (node.kind === ts.SyntaxKind.UndefinedKeyword || node.kind === ts.SyntaxKind.NullKeyword) {
    return true;
  }
  return ts.isLiteralTypeNode(node) && node.literal.kind === ts.SyntaxKind.NullKeyword;
}

const VALUE_TYPES = new Set(["double", "int", "long", "bool", "DateTime", "decimal", "float"]);

function makeNullable(text: string): string {
  if (text.endsWith("?") || text.startsWith("List<") || text === "object") {
    return text.endsWith("?") ? text : `${text}?`;
  }
  return `${text}?`;
}

function stripTrailingNullable(text: string): string {
  return text.endsWith("?") ? text.slice(0, -1) : text;
}

/* ------------------------------------------------------------------ */
/* Emission pass                                                       */
/* ------------------------------------------------------------------ */

interface CsProperty {
  name: string;
  originalName: string;
  type: string;
  summary?: string | undefined;
  isCollection: boolean;
}

function flattenMembers(info: TypeInfo, seen = new Set<string>()): ts.PropertySignature[] {
  if (seen.has(info.name)) {
    return [];
  }
  seen.add(info.name);

  const byName = new Map<string, ts.PropertySignature>();
  // Base members first so own members override them.
  for (const baseName of info.bases) {
    const base = registry.get(baseName);
    if (!base) {
      unresolved.add(baseName);
      continue;
    }
    for (const m of flattenMembers(base, seen)) {
      byName.set(propName(m), m);
    }
  }
  for (const m of info.members) {
    byName.set(propName(m), m);
  }
  return [...byName.values()];
}

function propName(member: ts.PropertySignature): string {
  const n = member.name;
  if (ts.isIdentifier(n) || ts.isStringLiteral(n)) {
    return n.text;
  }
  return n.getText();
}

function buildProperties(owner: string, members: ts.PropertySignature[]): CsProperty[] {
  const props: CsProperty[] = [];
  const usedNames = new Set<string>();
  for (const member of members) {
    const original = propName(member);
    if (original === "Doc") {
      continue; // XmlDocument back-reference, not a data field.
    }
    const mapped = mapPropertyType(member.type, owner, original);
    let name = toPascal(original);
    if (name.length === 0) {
      continue;
    }
    if (usedNames.has(name)) {
      const disambiguated = `${name}Value`;
      if (usedNames.has(disambiguated)) {
        continue; // genuine duplicate field after normalization; keep first.
      }
      name = disambiguated;
    }
    usedNames.add(name);
    props.push({
      name,
      originalName: original,
      type: mapped.text,
      summary: jsDocSummary(member),
      isCollection: mapped.isCollection,
    });
  }
  return props;
}

function jsDocSummary(node: ts.Node): string | undefined {
  const jsDoc = (node as unknown as { jsDoc?: ts.JSDoc[] }).jsDoc;
  if (!jsDoc || jsDoc.length === 0) {
    return undefined;
  }
  const comment = jsDoc[jsDoc.length - 1]?.comment;
  if (!comment) {
    return undefined;
  }
  const text = typeof comment === "string" ? comment : comment.map((c) => c.text).join("");
  const trimmed = text.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function renderClass(
  className: string,
  props: CsProperty[],
  renameMap: Map<string, string>,
  tableName?: string,
  useColumnAttr = false,
): string {
  const lines: string[] = [];
  if (tableName) {
    const classAttr = useColumnAttr ? "Table" : "XmlRoot";
    lines.push(`    [${classAttr}("${tableName.replace(/"/g, '\\"')}")]`);
  }
  lines.push(`    public class ${className}`);
  lines.push("    {");
  const used = new Set<string>(props.map((p) => p.name));
  props.forEach((p, i) => {
    if (i > 0) {
      lines.push("");
    }
    if (p.summary) {
      lines.push("        /// <summary>");
      for (const l of escapeXml(p.summary).split(/\r?\n/)) {
        lines.push(`        /// ${l}`);
      }
      lines.push("        /// </summary>");
    }
    // A C# property may not share its enclosing type's name.
    let propName = p.name;
    if (propName === className) {
      propName = `${propName}Value`;
      while (used.has(propName)) {
        propName = `${propName}_`;
      }
      used.add(propName);
    }
    const type = applyRenames(p.type, renameMap);
    const attr = useColumnAttr ? "Column" : "XmlElement";
    lines.push(`        [${attr}("${p.originalName.replace(/"/g, '\\"')}")]`);
    const initializer = p.isCollection ? ` = new ${type}();` : "";
    lines.push(`        public ${type} ${propName} { get; set; }${initializer}`);
  });
  lines.push("    }");
  return lines.join("\n");
}

/** Rewrite renamed type identifiers inside a C# type string (e.g. `List<Foo>?`). */
function applyRenames(type: string, renameMap: Map<string, string>): string {
  if (renameMap.size === 0) {
    return type;
  }
  return type.replace(/[A-Za-z_][A-Za-z0-9_]*/g, (token) => renameMap.get(token) ?? token);
}

function escapeXml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ------------------------------------------------------------------ */
/* Naming helpers                                                      */
/* ------------------------------------------------------------------ */

function toPascal(input: string): string {
  const parts = input.split(/[_\s-]+/).filter(Boolean);
  let result = parts
    .map((p) => (p.length === 0 ? p : p[0]?.toUpperCase() + p.slice(1)))
    .join("");
  if (result.length === 0) {
    return result;
  }
  if (/^[0-9]/.test(result)) {
    result = `_${result}`;
  }
  return result;
}

/** Convert a PascalCase/CamelCase identifier to snake_case (e.g. `AccountDoc` -> `account_doc`). */
function toSnake(input: string): string {
  return input
    .replace(/^_+/, "")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Za-z])([0-9])/g, "$1_$2")
    .toLowerCase();
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

function main(): void {
  const folders = fs
    .readdirSync(XML_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const folder of folders) {
    const file = path.join(XML_ROOT, folder, "index.d.ts");
    if (fs.existsSync(file)) {
      collectFromFile(file, folder);
    }
  }

  // Build C# properties for every type. `synthetic` and `referenced` are
  // populated as a side effect of mapping, so drain them until stable.
  interface Entry {
    raw: string;
    folder: string;
    props: CsProperty[];
  }
  const entries: Entry[] = [];
  const built = new Set<string>();

  const build = (raw: string, folder: string, members: ts.PropertySignature[]): void => {
    if (built.has(raw)) {
      return;
    }
    built.add(raw);
    entries.push({ raw, folder, props: buildProperties(raw, members) });
  };

  for (const info of registry.values()) {
    build(info.name, info.folder, flattenMembers(info));
  }
  // Types referenced only as method-only interfaces still need emitting.
  for (const name of referenced) {
    const info = registry.get(name);
    if (info) {
      build(info.name, info.folder, flattenMembers(info));
    }
  }
  // Synthetic classes from inline object literals (may nest, so loop).
  let pending = true;
  while (pending) {
    pending = false;
    for (const [name, syn] of synthetic) {
      if (!built.has(name)) {
        build(name, syn.folder, syn.members);
        pending = true;
      }
    }
  }

  // Only `*DocumentTopElem` types are real document/database entities. Keep
  // those as roots and follow their dependencies (flattened bases are already
  // inlined; here we chase referenced value types and nested classes), then
  // drop every type that no document entity depends on.
  const DOC_SUFFIX = "DocumentTopElem";
  const entryByRaw = new Map<string, Entry>(entries.map((e) => [e.raw, e]));
  const knownNames = new Set(entryByRaw.keys());
  const dependenciesOf = (e: Entry): string[] => {
    const deps = new Set<string>();
    for (const p of e.props) {
      for (const token of p.type.match(/[A-Za-z_][A-Za-z0-9_]*/g) ?? []) {
        if (knownNames.has(token)) {
          deps.add(token);
        }
      }
    }
    return [...deps];
  };

  const keep = new Set<string>();
  const stack = entries.filter((e) => e.raw.endsWith(DOC_SUFFIX)).map((e) => e.raw);
  while (stack.length > 0) {
    const name = stack.pop()!;
    if (keep.has(name)) {
      continue;
    }
    keep.add(name);
    const entry = entryByRaw.get(name);
    if (entry) {
      for (const dep of dependenciesOf(entry)) {
        if (!keep.has(dep)) {
          stack.push(dep);
        }
      }
    }
  }
  const keptEntries = entries.filter((e) => keep.has(e.raw));
  const droppedCount = entries.length - keptEntries.length;

  // Compute a final C# class name for each raw TS name. `XxxDocumentTopElem`
  // types are shortened to `Xxx` for ergonomics unless that collides with
  // another type (then the full name is kept). References to renamed types are
  // rewritten at render time via `renameMap`.
  const TOP_SUFFIX = DOC_SUFFIX;
  const finalName = new Map<string, string>();
  const reserved = new Set<string>();
  for (const e of keptEntries) {
    if (!e.raw.endsWith(TOP_SUFFIX)) {
      finalName.set(e.raw, e.raw);
      reserved.add(e.raw);
    }
  }
  for (const e of keptEntries) {
    if (!e.raw.endsWith(TOP_SUFFIX)) {
      continue;
    }
    const stripped = e.raw.slice(0, -TOP_SUFFIX.length);
    let chosen = stripped.length > 0 && !reserved.has(stripped) ? stripped : e.raw;
    while (reserved.has(chosen)) {
      chosen = `${chosen}Doc`;
    }
    finalName.set(e.raw, chosen);
    reserved.add(chosen);
  }
  const renameMap = new Map<string, string>();
  for (const [raw, final] of finalName) {
    if (raw !== final) {
      renameMap.set(raw, final);
    }
  }

  // Group emitted classes by folder. Folders that define at least one
  // `*DocumentTopElem` are real entities and keep their own file (with their
  // nested types). Everything else is a shared support type; collect those in
  // a single `Shared.g.cs` instead of per-source-folder files like WtvGeneral.
  const documentFolders = new Set<string>();
  for (const e of keptEntries) {
    if (e.raw.endsWith(DOC_SUFFIX)) {
      documentFolders.add(e.folder);
    }
  }
  const SHARED_FOLDER = "shared";
  const byFolder = new Map<
    string,
    { className: string; props: CsProperty[]; tableName?: string | undefined; useColumn?: boolean }[]
  >();
  for (const e of keptEntries) {
    if (e.props.length === 0 && !referenced.has(e.raw)) {
      continue;
    }
    const folder = documentFolders.has(e.folder) ? e.folder : SHARED_FOLDER;
    if (!byFolder.has(folder)) {
      byFolder.set(folder, []);
    }
    const className = finalName.get(e.raw)!;
    const isDoc = e.raw.endsWith(DOC_SUFFIX);
    const isCatalog = e.folder.endsWith("_catalog");
    // Catalog documents map to a pluralized relational table with [Column]
    // fields; other documents map to a singular table with [XmlElement] fields.
    let tableName: string | undefined;
    if (isDoc && isCatalog) {
      tableName = `${toSnake(className).replace(/_catalog$/, "")}s`;
    } else if (isDoc) {
      tableName = toSnake(className);
    }
    byFolder
      .get(folder)!
      .push({ className, props: e.props, tableName, useColumn: isDoc && isCatalog });
  }

  // Clean output directory.
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let fileCount = 0;
  let classCount = 0;
  for (const [folder, classes] of [...byFolder.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    classes.sort((a, b) => a.className.localeCompare(b.className));
    const body = classes.map((c) => renderClass(c.className, c.props, renameMap, c.tableName, c.useColumn)).join("\n\n");
    const content =
      "// <auto-generated>\n" +
      "//     This file was generated by scripts/generate-dotnet.ts from lib/xml.\n" +
      "//     Do not edit it directly; re-run `npm run generate:dotnet` instead.\n" +
      "// </auto-generated>\n\n" +
      "#nullable enable\n\n" +
      "using System;\n" +
      "using System.Collections.Generic;\n" +
      "using System.ComponentModel.DataAnnotations.Schema;\n" +
      "using System.Xml.Serialization;\n\n" +
      `namespace ${NAMESPACE}\n{\n${body}\n}\n`;
    fs.writeFileSync(path.join(OUT_DIR, `${toPascal(folder)}.g.cs`), content, "utf8");
    fileCount += 1;
    classCount += classes.length;
  }

  console.log(
    `Generated ${classCount} classes across ${fileCount} files into ${path.relative(REPO_ROOT, OUT_DIR)}` +
      ` (kept ${keptEntries.length} document types + dependencies, dropped ${droppedCount} unreferenced non-entity types)`,
  );
  if (unresolved.size > 0) {
    const sample = [...unresolved].sort().slice(0, 20).join(", ");
    console.warn(
      `Note: ${unresolved.size} referenced type(s) were not found in lib/xml and mapped to \`object\`.` +
        `\n  e.g. ${sample}${unresolved.size > 20 ? ", ..." : ""}`,
    );
  }
}

main();
