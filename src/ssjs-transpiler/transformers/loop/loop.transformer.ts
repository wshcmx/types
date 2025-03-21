import * as ts from 'typescript';
import {IBaseTransformer} from "../base/ibase.transformer";

export class ForTransformer implements IBaseTransformer {
    public transform(): ts.TransformerFactory<ts.SourceFile> {
        return (context: ts.TransformationContext) => {
            const visitNode: ts.Visitor = (node: ts.Node): ts.Node => {
                node = this.forOfToForInTransform(node, context);
                node = this.removeVarFromVariables(node, context);
                node = this.modifyLoopVariableDeclarations(node, context);

                return ts.visitEachChild(node, visitNode, context) as ts.SourceFile;
            };

            return (sourceFile: ts.SourceFile) => ts.visitNode(sourceFile, visitNode) as ts.SourceFile;
        };
    }

    private forOfToForInTransform(node: ts.Node, context: ts.TransformationContext): ts.Node {
        if (ts.isForOfStatement(node)) {
            return ts.factory.createForInStatement(
                node.initializer,
                node.expression,
                ts.visitEachChild(node.statement, (childNode) => this.forOfToForInTransform(childNode, context), context)
            );
        }

        return ts.visitEachChild(node, (childNode) => this.forOfToForInTransform(childNode, context), context);
    }

    private removeVarFromVariables(node: ts.Node, context: ts.TransformationContext): ts.Node {
        const {factory} = context;

        function isInsideLoop(node: ts.Node): boolean {
            while (node) {
                if (ts.isForOfStatement(node) || ts.isForInStatement(node) || ts.isForStatement(node)) {
                    return true;
                }
                node = node.parent;
            }
            return false;
        }

        if (ts.isVariableStatement(node) && isInsideLoop(node)) {
            const statements: ts.Statement[] = [];
            node.declarationList.declarations.forEach(declaration => {
                if (ts.isIdentifier(declaration.name)) {
                    statements.push(
                        factory.createExpressionStatement(
                            factory.createAssignment(
                                declaration.name,
                                declaration.initializer || factory.createIdentifier("undefined")
                            )
                        )
                    );
                }
            });

            return statements.length === 1 ? statements[0] : factory.createBlock(statements, true);
        }

        return ts.visitEachChild(node, (childNode) => this.removeVarFromVariables(childNode, context), context);
    }

    private modifyLoopVariableDeclarations(node: ts.Node, context: ts.TransformationContext): ts.Node {
        const {factory} = context;

        if (ts.isForOfStatement(node) || ts.isForInStatement(node) || ts.isForStatement(node)) {
            if (ts.isVariableDeclarationList(node.initializer!)) {
                const declarations = node.initializer.declarations;

                if (declarations.length === 1) {
                    const declaration = declarations[0];

                    if (ts.isIdentifier(declaration.name)) {
                        if (ts.isForOfStatement(node)) {
                            return factory.createForOfStatement(
                                node.awaitModifier,
                                factory.createIdentifier(declaration.name.text),
                                node.expression,
                                ts.visitEachChild(node.statement,
                                    (childNode) => this.modifyLoopVariableDeclarations(childNode, context), context));
                        } else if (ts.isForInStatement(node)) {
                            return factory.createForInStatement(
                                factory.createIdentifier(declaration.name.text),
                                node.expression,
                                ts.visitEachChild(node.statement,
                                    (childNode) => this.modifyLoopVariableDeclarations(childNode, context), context));
                        } else if (ts.isForStatement(node)) {
                            const loopVarName = declaration.name.text;

                            return ts.factory.createForStatement(
                                ts.factory.createBinaryExpression(
                                    ts.factory.createIdentifier(loopVarName),
                                    ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                                    declaration.initializer!
                                ),
                                node.condition,
                                node.incrementor,
                                ts.visitEachChild(node.statement,
                                    (childNode) => this.modifyLoopVariableDeclarations(childNode, context), context)
                            );
                        }
                    }
                }
            }
        }

        return ts.visitEachChild(node, (childNode) => this.modifyLoopVariableDeclarations(childNode, context), context);
    }
}
