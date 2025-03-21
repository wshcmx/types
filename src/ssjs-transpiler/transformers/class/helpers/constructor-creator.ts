import ts, {Statement} from 'typescript';
import {IConstructorCreator} from "../interfaces/constructor-creator";
import {IObjectCreator} from "../interfaces/object-creator";
import {ObjectCreator} from "./object-creator";
import {ClassTransformer} from "../class-transformer";

export class ConstructorCreator implements IConstructorCreator {
    private _objectCreator: IObjectCreator;

    constructor(context: ts.TransformationContext, program: ts.Program) {
        this._objectCreator = new ObjectCreator(context, program);
    }

    public createConstructorFunction(constructor: ts.ConstructorDeclaration): ts.FunctionDeclaration | undefined {
        if (!constructor.body) {
            return undefined;
        }

        const bodyStatements = constructor.body.statements.map(stmt => {
            return ts.visitNode(stmt, (child) => this.replaceSuperWithCustomCode(child));
        }) as Statement[];

        const returnThisStatement = ts.factory.createReturnStatement(ts.factory.createIdentifier('This'));
        bodyStatements.push(returnThisStatement);

        return ts.factory.createFunctionDeclaration(
            undefined,
            undefined,
            '__constructor',
            undefined,
            constructor.parameters,
            undefined,
            ts.factory.createBlock(bodyStatements, true)
        );
    }

    private replaceSuperWithCustomCode(node: ts.Node): ts.Node {
        if (ts.isExpressionStatement(node) && ts.isCallExpression(node.expression)) {
            const className = this.getInheritedClassName(node);

            if (className) {
                return ts.factory.createVariableDeclaration(
                    ClassTransformer.superKeyword,
                    undefined,
                    undefined,
                    this._objectCreator.create(node.expression)
                );
            }
        }
        return node;
    }

    private getInheritedClassName(node: ts.Node): string | undefined {
        let current: ts.Node | undefined = node;

        while (current) {
            if (ts.isClassDeclaration(current)) {
                const heritageClause = current.heritageClauses?.find(clause =>
                    clause.token === ts.SyntaxKind.ExtendsKeyword
                );

                if (heritageClause && heritageClause.types.length > 0) {
                    const baseType = heritageClause.types[0];
                    if (ts.isIdentifier(baseType.expression)) {
                        return baseType.expression.text;
                    }
                }
            }

            current = current.parent;
        }

        return undefined;
    }
}