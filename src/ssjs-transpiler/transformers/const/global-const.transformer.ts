import {IBaseTransformer} from "../base/ibase.transformer";
import ts from "typescript";
import {Runtime} from "../../core/config/runtime";
import {projectConfig} from "../../core/config/project-config";

export class GlobalConstTransformer implements IBaseTransformer {
    private _context!: ts.TransformationContext;

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            this._context = context;

            const visitor: ts.Visitor = (node) => this.visitNode(node);
            return (node: ts.SourceFile) => ts.visitNode(node, visitor) as ts.SourceFile;;
        };
    }

    private visitNode(node: ts.Node): any {
        const variable = this.replaceStringVariableValue(node, '__RUNTIME_ID', Runtime.id)
            || this.replaceStringVariableValue(node, '__BUILD_DIRECTORY', `${projectConfig.outDir}`)
            || this.replaceStringVariableValue(node, '__PROJECT_PATH', `x-local://${projectConfig.projectLocationRelativeServerFolder}`);

        if (variable)
            return variable;

        return ts.visitEachChild(node, (child) => this.visitNode(child), this._context);
    }

    private replaceStringVariableValue(node: ts.Node, variableName: string, value: string) {
        if (ts.isVariableDeclaration(node) && node.name.getText() === variableName) {
            return ts.factory.updateVariableDeclaration(
                node,
                node.name,
                node.exclamationToken,
                node.type,
                ts.factory.createStringLiteral(value)
            );
        }
    }
}