import ts from "typescript";

export class DecoratorFuncCreator {
    create(): ts.FunctionDeclaration {
        const methodBody = ts.factory.createBlock(
            [
                this.createVariableStatement("i"),
                this.createVariableStatement("decorator"),
                this.createForLoop(),
            ],
            true
        );

        return ts.factory.createFunctionDeclaration(
            undefined, // modifiers
            undefined, // asterisk for generator
            ts.factory.createIdentifier("__decorate"), // method name
            undefined, // question mark
            this.createParameters(), // parameters
            undefined, // return type
            methodBody // method body
        );
    }

    private createVariableStatement(variableName: string): ts.VariableStatement {
        return ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        ts.factory.createIdentifier(variableName),
                        undefined,
                        undefined,
                        undefined
                    ),
                ],
                ts.NodeFlags.Let
            )
        );
    }

    private createForLoop(): ts.ForStatement {
        const iVariable = ts.factory.createIdentifier("i");
        const decoratorsIdentifier = ts.factory.createIdentifier("decorators");

        // Создаем условие `i >= 0`
        const condition = ts.factory.createBinaryExpression(
            iVariable,
            ts.SyntaxKind.GreaterThanEqualsToken,
            ts.factory.createNumericLiteral(0)
        );

        // Создаем шаг `i--`
        const incrementor = ts.factory.createPostfixUnaryExpression(iVariable, ts.SyntaxKind.MinusMinusToken);

        // Создаем выражение `decorator = decorators[i];`
        const decoratorAssignment = ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
                ts.factory.createIdentifier("decorator"),
                ts.SyntaxKind.EqualsToken,
                ts.factory.createElementAccessExpression(decoratorsIdentifier, iVariable)
            )
        );

        const decoratorCall = ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
                ts.factory.createIdentifier("decorator"),
                undefined,
                [
                    ts.factory.createIdentifier("target"),
                    ts.factory.createIdentifier("key"),
                    ts.factory.createIdentifier("desc")
                ]
            )
        );

        const ifObjectType = ts.factory.createIfStatement(
            ts.factory.createBinaryExpression(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("ObjectType"),
                    undefined,
                    [ts.factory.createIdentifier("decorator")]
                ),
                ts.SyntaxKind.EqualsEqualsEqualsToken,
                ts.factory.createStringLiteral("JsFuncObject")
            ),
            ts.factory.createBlock([decoratorCall], true),
            undefined
        );

        // Создаем тело цикла
        return ts.factory.createForStatement(
            ts.factory.createIdentifier("i = decorators.length - 1"),
            condition,
            incrementor,
            ts.factory.createBlock([
                decoratorAssignment,
                ifObjectType
            ], true)
        );
    }

    private createParameters(): ts.ParameterDeclaration[] {
        return [
            ts.factory.createParameterDeclaration(undefined, undefined, ts.factory.createIdentifier("decorators")),
            ts.factory.createParameterDeclaration(undefined, undefined, ts.factory.createIdentifier("target")),
            ts.factory.createParameterDeclaration(undefined, undefined, ts.factory.createIdentifier("key")),
            ts.factory.createParameterDeclaration(undefined, undefined, ts.factory.createIdentifier("desc")),
        ];
    }
}