import ts from 'typescript';
import {IBaseTransformer} from "../base/ibase.transformer";

export class ConvertorTemplateStringsTransformer implements IBaseTransformer {
    transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context) => (sourceFile: ts.SourceFile) => {
            function visit(node: ts.Node): ts.Node {
                if (ts.isTemplateExpression(node)) {
                    let result: ts.Expression = ts.factory.createStringLiteral(node.head.text);

                    node.templateSpans.forEach(span => {
                        result = ts.factory.createBinaryExpression(
                            ts.factory.createBinaryExpression(
                                result,
                                ts.SyntaxKind.PlusToken,
                                span.expression
                            ),
                            ts.SyntaxKind.PlusToken,
                            ts.factory.createStringLiteral(span.literal.text)
                        );
                    });

                    return result;
                }

                return ts.visitEachChild(node, visit, context);
            }

            return ts.visitNode(sourceFile, visit) as ts.SourceFile;
        };
    }
}