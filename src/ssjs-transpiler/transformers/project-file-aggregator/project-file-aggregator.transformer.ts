import * as ts from 'typescript';
import {IBaseTransformer} from '../base/ibase.transformer';
import {SourceFileResolver} from "../../core/utils/source-file-resolver";
import {projectConfig} from "../../core/config/project-config";

export class ProjectFileAggregatorTransformer implements IBaseTransformer {
    private readonly _sourceFileResolver = new SourceFileResolver();
    private _context!: ts.TransformationContext;

    constructor(private filePaths: string[]) {
    }

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            this._context = context;
            const visitor: ts.Visitor = (node) => this.visitNode(node);
            return (node: ts.SourceFile) => {
                if (node.fileName.endsWith('__connector.ts')) {
                    return ts.visitNode(node, visitor) as ts.SourceFile;
                }
                return node;
            };
        };
    }

    private visitNode(node: ts.Node): ts.Node {
        if (ts.isVariableDeclaration(node) && node.name.getText() === '__RUNTIME_CONTEXT') {
            const runtimeContext = node.initializer as ts.ObjectLiteralExpression;

            const newProgramContext = this.createProgramContextProperty();
            const updatedProperties = [...runtimeContext.properties, newProgramContext];

            return ts.factory.updateVariableDeclaration(
                node,
                node.name,
                node.exclamationToken,
                node.type,
                ts.factory.updateObjectLiteralExpression(runtimeContext, updatedProperties)
            );
        }

        return ts.visitEachChild(node, (child) => this.visitNode(child), this._context);
    }

    private createProgramContextProperty(): ts.PropertyAssignment {
        const programContextEntries = this.filePaths.map((filePath) => {
            const filePathName = this._sourceFileResolver.removeFileExtension(filePath);
            const fileName = this._sourceFileResolver.getCompiledFilePath(filePathName).replace(/\\/g, '/');

            const urlAppendPathCall = ts.factory.createCallExpression(
                ts.factory.createIdentifier('UrlAppendPath'),
                undefined,
                [
                    ts.factory.createIdentifier('__PROJECT_PATH'),
                    ts.factory.createStringLiteral(fileName + '.js')
                ]
            );

            return ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(fileName), urlAppendPathCall);
        });

        const programContextObject = ts.factory.createObjectLiteralExpression(programContextEntries, true);

        const tsToBuildPaths = ts.factory.createObjectLiteralExpression([
            ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier('ts_to_build_paths'),
                programContextObject
            )
        ], true);

        return ts.factory.createPropertyAssignment(
            'program_context',
            tsToBuildPaths
        );
    }
}
