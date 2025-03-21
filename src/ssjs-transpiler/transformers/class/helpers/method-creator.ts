import ts from 'typescript';
import {IMethodCreator} from "../interfaces/method-creator";

export class MethodCreator implements IMethodCreator {
    public createMethodDeclaration(
        method: ts.MethodDeclaration
            | ts.GetAccessorDeclaration
            | ts.SetAccessorDeclaration
    ): ts.FunctionDeclaration | undefined {
        if (!method.body || (ts.getCombinedModifierFlags(method) & ts.ModifierFlags.Static) !== 0)
            return;

        return ts.factory.createFunctionDeclaration(
            undefined,
            undefined,
            method.name.getText(),
            undefined,
            method.parameters,
            method.type,
            ts.factory.createBlock(method.body.statements, true)
        );
    }
}