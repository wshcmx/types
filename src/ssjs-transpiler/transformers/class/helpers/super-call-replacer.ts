import ts, {factory, TransformationContext} from "typescript";
import {ISuperCallReplacer} from "../interfaces/super-call-replacer";

export class SuperCallReplacer implements ISuperCallReplacer {
    constructor(private context: TransformationContext) {}

    public replaceSuperCalls(node: ts.Node): ts.Node {
        // Проверяем, что это класс и есть наследование
        if (ts.isClassDeclaration(node) && node.heritageClauses) {
            const hasSuper = node.heritageClauses.some(heritage =>
                heritage.token === ts.SyntaxKind.ExtendsKeyword
            );

            if (hasSuper) {
                // Заменяем super() в конструкторе на кастомное выражение
                const constructorNode = node.members.find(ts.isConstructorDeclaration);
                if (constructorNode) {
                    // Мы заменяем super() в конструкторе
                    const superCallIndex = constructorNode.body?.statements.findIndex(stmt =>
                        ts.isExpressionStatement(stmt) && ts.isCallExpression(stmt.expression)
                    );

                    if (superCallIndex !== undefined && superCallIndex !== -1) {
                        const customSuperCall = factory.createExpressionStatement(
                            factory.createCallExpression(
                                factory.createIdentifier("super"),
                                undefined,
                                [factory.createVoidZero()] // Здесь можно передать аргументы для super(), если нужно
                            )
                        );

                        // Заменяем старый super() вызов на наш кастомный
                        const statements = [
                            ...constructorNode.body!.statements.slice(0, superCallIndex),
                            customSuperCall,
                            ...constructorNode.body!.statements.slice(superCallIndex + 1)
                        ];

                        return ts.factory.updateConstructorDeclaration(
                            constructorNode,
                            constructorNode.modifiers,
                            constructorNode.parameters,
                            factory.createBlock(statements)
                        );
                    }
                }
            }
        }

        return ts.visitEachChild(node, (child) => this.replaceSuperCalls(child), this.context);
    }
}