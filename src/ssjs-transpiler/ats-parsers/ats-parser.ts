import ts from "typescript";
import {IAtsParser} from "./interfaces/ats-parser.interface";
import {ImportParser} from "./parsers/import.parser";

export class AtsParser implements IAtsParser {
    private readonly _importParser = new ImportParser();

    public parse(sourceFiles: readonly ts.SourceFile[]) {
        this._importParser.parse(sourceFiles);
    }
}