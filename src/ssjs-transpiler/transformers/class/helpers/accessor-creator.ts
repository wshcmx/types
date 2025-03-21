import ts from "typescript";
import {IAccessorCreator} from "../interfaces/accessor-creator";

export class AccessorCreator implements IAccessorCreator {
    public createFunction(method: ts.MethodDeclaration |
        ts.GetAccessorDeclaration |
        ts.SetAccessorDeclaration): ts.FunctionDeclaration | undefined {
        if (!method.body)
            return undefined;

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