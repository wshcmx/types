import ts, {ScriptKind} from 'typescript';
import {IBaseTransformer} from "../base/ibase.transformer";
import {ClassNodeProcessor} from "./class-node-processor";
import {projectConfig} from "../../core/config/project-config";
import {SourceFileResolver} from "../../core/utils/source-file-resolver";
import {Project} from "ts-morph";

export class ClassTransformer implements IBaseTransformer {
    public static readonly thisKeyword = "__this";
    public static readonly superKeyword = "__super";

    private _classNodeProcessor!: ClassNodeProcessor
    private _context!: ts.TransformationContext;
    private _sourceFileResolver = new SourceFileResolver()

    constructor(private program: ts.Program, private morphProject: Project) {
    }

    public transform(): ts.TransformerFactory<ts.SourceFile> {
        if (!projectConfig.projectLocationRelativeServerFolder)
            throw Error("UserConfig.projectLocationRelativeServerFolder is not be empty.");

        return (context: ts.TransformationContext) => {
            this._context = context;
            this._classNodeProcessor = new ClassNodeProcessor(context, this.program, this.morphProject);

            const visitor: ts.Visitor = (node) => this.visitNode(node);
            return (node: ts.SourceFile) => {
                return ts.visitNode(node, visitor) as ts.SourceFile;
            };
        };
    }

    private visitNode(node: ts.Node): any {
        let transformedClass = this._classNodeProcessor.classMembersTransform(node);

        if (transformedClass) {
            return transformedClass;
        }

        const visitedNode = ts.visitEachChild(node, (child) => this.visitNode(child), this._context);

        const classTransformResult = this._classNodeProcessor.classTransform(visitedNode);
        if (classTransformResult) {
            return classTransformResult;
        }

        return visitedNode;
    }

}