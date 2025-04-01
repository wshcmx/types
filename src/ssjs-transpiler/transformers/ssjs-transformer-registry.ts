import {IBaseTransformer} from "./base/ibase.transformer";
import ts from "typescript";
import {ForTransformer} from "./loop/loop.transformer";
import {ArrayMethodTransformer} from "./array/array.transformer";
import {GlobalConstTransformer} from "./const/global-const.transformer";
import {ITransformerRegistry} from "../interfaces/transformer-registry.interface";
import {ProjectFileAggregatorTransformer} from "./project-file-aggregator/project-file-aggregator.transformer";
import {ConvertorTemplateStringsTransformer} from "./string/convertor-template-strings.transformer";

export class SsjsTransformerRegistry implements ITransformerRegistry {
    private _transformers: IBaseTransformer[] = [];
    private _afterTransformers: IBaseTransformer[] = [];

    get transformers() {
        return this._transformers;
    }

    get afterTransformers() {
        return this._afterTransformers;
    }

    constructor(private program: ts.Program, private projectFiles: string[]) {
        this.registerTransformers();
    }

    private registerTransformers(): void {
        // this._transformers.push(new GlobalConstTransformer());
        // this._transformers.push(new ProjectFileAggregatorTransformer(this.projectFiles));
        // this._transformers.push(new ClassTransformer(this.program));
        // this._afterTransformers.push(new DecoratorFuncTransformer(this.morphProject));
        this._transformers.push(new ForTransformer());
        this._transformers.push(new ArrayMethodTransformer());
        this._transformers.push(new ConvertorTemplateStringsTransformer());
    }
}