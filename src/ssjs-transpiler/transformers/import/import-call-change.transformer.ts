import * as ts from 'typescript';

export class ImportCallChangeTransformer {
    private _context!: ts.TransformationContext;
    private _importSymbols: { imports: string[], name: string | undefined }[] = [];

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            this._context = context;
            const visitor: ts.Visitor = (node) => this.visitNode(node);
            return (node: ts.SourceFile) => {
                this._importSymbols = [];
                return ts.visitNode(node, visitor) as ts.SourceFile;
            };
        };
    }

    private visitNode(node: ts.Node): ts.Node {
        if (ts.isImportDeclaration(node)) {
            this.processImports(node);
        }

        if (ts.isNewExpression(node)) {
            for (let importSymbol of this._importSymbols) {
                for (let importName of importSymbol.imports) {
                    if ((node as ts.NewExpression).expression.getText() === importName) {
                        return ts.factory.createIdentifier(`__IMPORT_${importSymbol.name}.__new()`)
                    }
                }
            }
        }

        return ts.visitEachChild(node, (child) => this.visitNode(child), this._context);
    }

    private processImports(node: ts.ImportDeclaration) {
        const imports = node.importClause?.namedBindings?.getText()
            .replace('{', '')
            .replace('}', '')
            .split(',')
            .map(i => i.trim());

        if (!imports)
            return;

        this._importSymbols.push({
            imports: imports,
            name: node.moduleSpecifier.getText().replace(/"/g, '').split('/').pop(),
        });
    }
}
