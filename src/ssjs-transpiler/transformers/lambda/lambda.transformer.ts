import * as ts from 'typescript';
import {IBaseTransformer} from "../base/ibase.transformer";

export class ArrowFunctionTransformer implements IBaseTransformer {
    private lambdaCounter: number;

    constructor() {
        this.lambdaCounter = 0;
    }

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            const visitor: ts.Visitor = (node: ts.Node): ts.Node => this.visitNode(node, context);
            return (rootNode: ts.SourceFile) => ts.visitNode(rootNode, visitor) as ts.SourceFile;;
        };
    }

    private visitNode(node: ts.Node, context: ts.TransformationContext): ts.Node {
        if (ts.isArrowFunction(node)) {
            this.lambdaCounter++;

            const uniqueFunctionName = ts.factory.createIdentifier(`_${this.lambdaCounter}`);

            const bodyBlock = this.visitNode(node.body, context);
            const body = ts.isBlock(node.body)
                ? bodyBlock as ts.Block
                : ts.factory.createBlock([ts.factory.createReturnStatement(bodyBlock as ts.Expression)]);

            return ts.factory.createFunctionExpression(
                undefined,
                undefined,
                uniqueFunctionName,
                undefined,
                node.parameters,
                node.type,
                body
            );
        }

        return ts.visitEachChild(node, (childNode) => this.visitNode(childNode, context), context);
    }
}