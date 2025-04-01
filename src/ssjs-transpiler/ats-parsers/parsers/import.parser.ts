import ts from "typescript";
import {IAtsParser} from "../interfaces/ats-parser.interface";
import {SourceFileResolver} from "../../core/utils/source-file-resolver";
import {TSAst} from "../../core/ts-ast/type-script-ast";
import path from "node:path";
import {FileAts} from "../../core/ts-ast/entities/file-ats";

export class ImportParser implements IAtsParser {
    private readonly _sourceFileResolver = new SourceFileResolver();

    public parse(sourceFiles: readonly ts.SourceFile[]) {
        const visitor = (node: any, file: FileAts) => this.visitNode(node, file);
        sourceFiles.forEach(node => {
            const filePathName = this._sourceFileResolver.removeFileExtension(node.fileName);
            const fileName = this._sourceFileResolver.getCompiledFilePath(filePathName).replace(/\\/g, '/');

            let file = TSAst.getFileByName(fileName);
            if (!file) {
                file = new FileAts();
                file.tsFile = node.fileName;
                file.jsFile = fileName;
                file.name = node.fileName.split("\\").shift()!;

                TSAst.files.push(file);
            }

            return ts.visitNode(node, (child) => visitor(child, file!))
        });
    }

    private visitNode(node: ts.Node, file: FileAts): ts.Node {
        if (ts.isImportDeclaration(node)) {
            const importClause = node.importClause;
            let importName: string = '';
            let importPath: string = '';

            if (importClause) {
                if (importClause.name) {
                    importName = importClause.name.text;
                    importPath = (node.moduleSpecifier as ts.StringLiteral).text;
                }

                if (importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
                    importPath = (node.moduleSpecifier as ts.StringLiteral).text;
                    importName = path.basename(importPath);
                }

                try {
                    const imports = importClause.namedBindings?.getText()
                        .replace('{', '')
                        .replace('}', '')
                        .split(',')
                        .map(i => i.trim()) ?? [];

                    if (!file.imports)
                        file.imports = [];

                    file.imports.push({
                        path: importPath,
                        name: importName,
                        imports: imports
                    });
                } catch (e) {

                }
            }
        }

        return node.forEachChild(child => this.visitNode(child, file)) ?? node;
    }
}