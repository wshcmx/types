import * as ts from 'typescript';
import {SyntaxKind} from 'typescript';
import {IBaseTransformer} from '../base/ibase.transformer';
import {Runtime} from "../../core/config/runtime";
import {SourceFileResolver} from "../../core/utils/source-file-resolver";
import path from "node:path";

export class ImportReplacerTransformer implements IBaseTransformer {
    private readonly _sourceFileResolver = new SourceFileResolver();
    private _context!: ts.TransformationContext;

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            this._context = context;

            const visitor: ts.Visitor = (node) => this.visitNode(node);
            return (node: ts.SourceFile) => ts.visitNode(node, visitor) as ts.SourceFile;;
        };
    }

    private visitNode(node: ts.Node): ts.Node {
        if (ts.isSourceFile(node)) {
            const contextVar = this.createGlobalCacheContextVar();
            const newStatements = [contextVar, ...node.statements];
            node = ts.factory.updateSourceFile(node, newStatements);
        }

        if (ts.isImportDeclaration(node)) {
            const importClause = node.importClause;

            if (importClause) {
                if (importClause.name) {
                    const importName = importClause.name.text;
                    const importPath = (node.moduleSpecifier as ts.StringLiteral).text;
                    return this.createGlobalCacheAssignment(importClause, importName, importPath);
                }

                if (importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
                    const importPath = (node.moduleSpecifier as ts.StringLiteral).text;
                    const importName = path.basename(importPath);
                    return this.createGlobalCacheAssignment(importClause, importName, importPath);
                }
            }
        }

        return ts.visitEachChild(node, (child) => this.visitNode(child), this._context);
    }

    private createGlobalCacheContextVar(): ts.VariableStatement {
        const contextInitializer = ts.factory.createCallExpression(
            ts.factory.createIdentifier('GlobalCache.GetEntry'),
            undefined,
            [ts.factory.createStringLiteral(`${Runtime.id}`)]
        );

        const contextVarDeclaration = ts.factory.createVariableDeclarationList(
            [
                ts.factory.createVariableDeclaration(
                    ts.factory.createIdentifier('__CONTEXT'),
                    undefined,
                    undefined,
                    contextInitializer
                )
            ],
            ts.NodeFlags.Const
        );

        return ts.factory.createVariableStatement(
            undefined,
            contextVarDeclaration
        );
    }


    private createGlobalCacheAssignment(importClause: ts.ImportClause, importName: string, importPath: string): ts.VariableStatement {
        const fullJsPath = this._sourceFileResolver.getCompiledFilePath(importClause.getSourceFile().fileName);
        const relativeImportPath = path.join(path.dirname(fullJsPath), importPath).replace(/\\/g, '/');
        const imports = importClause.namedBindings?.getText()
            .replace('{', '')
            .replace('}', '');

        const customImport = ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        ts.factory.createIdentifier("__IMPORT_" + importName),
                        undefined,
                        undefined,
                        ts.factory.createIdentifier(`__CONTEXT.program_context.ts_to_build_paths['${relativeImportPath}']`)
                    )
                ],
                ts.NodeFlags.Const
            )
        );

        if (imports) {
            ts.addSyntheticLeadingComment(
                customImport,
                SyntaxKind.SingleLineCommentTrivia,
                `imports: ${imports}`
            );
        }

        return customImport;
    }
}
