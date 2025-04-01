import {IBaseTransformer} from "./base/ibase.transformer";
import ts from "typescript";
import {Project} from "ts-morph";
import {ITransformerRegistry} from "../interfaces/transformer-registry.interface";
import {ImportReplacerTransformer} from "./import/import-replacer.transformer";
import {ImportCallChangeTransformer} from "./import/import-call-change.transformer";
import {ClassTransformer} from "./class/class-transformer";
import {ForTransformer} from "./loop/loop.transformer";
import {ArrayMethodTransformer} from "./array/array.transformer";
import {ArrowFunctionTransformer} from "./lambda/lambda.transformer";
import {ConvertorTemplateStringsTransformer} from "./string/convertor-template-strings.transformer";

export class ProjectTransformerRegistry implements ITransformerRegistry {
    private _transformers: IBaseTransformer[] = [];
    private _afterTransformers: IBaseTransformer[] = [];

    get transformers() {
        return this._transformers;
    }

    get afterTransformers() {
        return this._afterTransformers;
    }

    constructor(private program: ts.Program, private morphProject: Project) {
        this.registerTransformers();
    }

    private registerTransformers(): void {
        this._transformers.push(new ImportCallChangeTransformer());
        // this._transformers.push(new ImportReplacerTransformer());
        // this._transformers.push(new ClassTransformer(this.program, this.morphProject));
        // this._afterTransformers.push(new DecoratorFuncTransformer(this.morphProject));
        this._transformers.push(new ForTransformer());
        this._transformers.push(new ArrayMethodTransformer());
        this._transformers.push(new ArrowFunctionTransformer());
        this._transformers.push(new ConvertorTemplateStringsTransformer());
    }
}