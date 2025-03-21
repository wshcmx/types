import ts, {Expression} from "typescript";
import {IObjectCreator} from "../interfaces/object-creator";
import {SourceFileResolver} from "../../../core/utils/source-file-resolver";
import {TSAst} from "../../../core/ts-ast/type-script-ast";

export class ObjectCreator implements IObjectCreator {
    private readonly _sourceFileResolver = new SourceFileResolver();
    private readonly _typeChecker: ts.TypeChecker;

    constructor(private context: ts.TransformationContext, private program: ts.Program) {
        this._typeChecker = program.getTypeChecker();
    }

    public create(node: ts.NewExpression | ts.CallExpression) {
        for (const file of TSAst.files) {
            if (file.tsFile === node.getSourceFile().fileName) {
                const importAst = file.imports?.find(i => i.imports.some(name => name === node.expression.getText()));
                if (importAst) {
                    const classConstructorArgs = this.getClassConstructorArgs(file.tsFile, node.expression.getText());
                    const constructorArgs = (node.arguments?.map(arg => ts.visitNode(arg, (child) => this.visitNode(child))) ?? []) as Expression[];

                    const countMissingParams = classConstructorArgs.length - constructorArgs.length;
                    for (let i = 0; i < countMissingParams; i++) {
                        constructorArgs.push(ts.factory.createVoidZero());
                    }

                    const openCodeLibraryCall = ts.factory.createCallExpression(
                        ts.factory.createIdentifier("OpenCodeLibrary"),
                        undefined,
                        [
                            ts.factory.createIdentifier("__IMPORT_" + importAst.name)
                        ]
                    );

                    if (classConstructorArgs.length <= 0)
                        return openCodeLibraryCall;

                    return ts.factory.createCallExpression(
                        ts.factory.createPropertyAccessExpression(
                            openCodeLibraryCall,
                            ts.factory.createIdentifier("__constructor")
                        ),
                        undefined,
                        constructorArgs
                    );
                }
            }
        }

        return node;

        // const className = node.expression.getText();
        // let relativeOutFilePath = this._sourceFileResolver.getRelativeOutFilePath(node, className);
        // const absoluteOriginalFilePath = this._sourceFileResolver.getAbsoluteOriginalFilePath(node, className);
        //
        // if (!relativeOutFilePath)
        //     relativeOutFilePath = this._sourceFileResolver.getRelativeOutFileByPath(node.getSourceFile().fileName);
        //
        // if (relativeOutFilePath && absoluteOriginalFilePath) {
        //     const classConstructorArgs = this.getClassConstructorArgs(absoluteOriginalFilePath, className);
        //     const constructorArgs = node.arguments?.map(arg => ts.visitNode(arg, (child) => this.visitNode(child))) ?? [];
        //
        //     const countMissingParams = classConstructorArgs.length - constructorArgs.length;
        //     for (let i = 0; i < countMissingParams; i++) {
        //         constructorArgs.push(ts.factory.createVoidZero());
        //     }
        //
        //     const openCodeLibraryCall = ts.factory.createCallExpression(
        //         ts.factory.createIdentifier("OpenCodeLibrary"),
        //         undefined,
        //         [
        //             ts.factory.createBinaryExpression(
        //                 ts.factory.createStringLiteral("x-local://"),
        //                 ts.SyntaxKind.PlusToken,
        //                 ts.factory.createStringLiteral(relativeOutFilePath)
        //             )
        //         ]
        //     );
        //
        //     if (classConstructorArgs.length <= 0)
        //         return openCodeLibraryCall;
        //
        //     return ts.factory.createCallExpression(
        //         ts.factory.createPropertyAccessExpression(
        //             openCodeLibraryCall,
        //             ts.factory.createIdentifier("__constructor")
        //         ),
        //         undefined,
        //         constructorArgs
        //     );
        // }
    }

    private getClassConstructorArgs(filePath: string, className: string): string[] {
        const sourceFile = this._sourceFileResolver.createSourceFile(filePath);

        const classNode = this.findClassNode(sourceFile, className);
        if (classNode) {
            const constructorNode = this.findConstructorNode(classNode);
            if (constructorNode) {
                return constructorNode.parameters.map(param => param.getText());
            }
        }

        return [];
    }

    private findClassNode(sourceFile: ts.SourceFile, className: string): ts.ClassDeclaration | undefined {
        return sourceFile.statements
            .filter(ts.isClassDeclaration)
            .find(cls => cls.name?.text === className);
    }

    private findConstructorNode(classNode: ts.ClassDeclaration): ts.ConstructorDeclaration | undefined {
        return classNode.members
            .filter(ts.isConstructorDeclaration)
            .find(constructor => constructor.body !== undefined);
    }

    private visitNode(node: ts.Node): ts.Node {
        return ts.visitEachChild(node, (child) => this.visitNode(child), this.context);
    }
}