type FunctionTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertFunctionType<T extends true>(value: unknown): T;

const charRange = StrCharRangePos("example", 1, 3);
assertFunctionType<FunctionTypesEqual<typeof charRange, string>>(charRange);

// @ts-expect-error The source string is required before the positions.
StrCharRangePos(1, 3);
// @ts-expect-error The source must be a string.
StrCharRangePos(123, 1, 3);
// @ts-expect-error The start position must be a number.
StrCharRangePos("example", "1", 3);
// @ts-expect-error The end position must be a number.
StrCharRangePos("example", 1, "3");
// @ts-expect-error Both positions are required.
StrCharRangePos("example", 1);

const date = Date();
StrDate(date);
StrDate(date, true);
StrDate(date, true, false);
const localDate = StrDate(date, true, false, true);
StrDate(date, true, false, false);
StrDate(date, undefined, undefined, true);
assertFunctionType<FunctionTypesEqual<typeof localDate, string>>(localDate);

// @ts-expect-error The local-time flag must be a boolean.
StrDate(date, true, false, "true");
// @ts-expect-error The date argument is required.
StrDate();

declare const resourceDocument: ResourceDocument;
declare const sourceDocument: XmlDocument;

const deletedData = resourceDocument.TopElem.del_data_add("attachment-id");
assertFunctionType<FunctionTypesEqual<typeof deletedData, void>>(deletedData);

const writtenData = resourceDocument.TopElem.put_str("contents", "example.txt");
const writtenDataWithSource = resourceDocument.TopElem.put_str("contents", "example.txt", sourceDocument);
resourceDocument.TopElem.put_str("contents", "example.txt", undefined);
resourceDocument.resource.put_str("contents", "example.txt", sourceDocument);
assertFunctionType<FunctionTypesEqual<typeof writtenData, void>>(writtenData);
assertFunctionType<FunctionTypesEqual<typeof writtenDataWithSource, void>>(writtenDataWithSource);

// @ts-expect-error The attachment ID must be a string.
resourceDocument.TopElem.del_data_add(123);
// @ts-expect-error The attachment ID is required.
resourceDocument.TopElem.del_data_add();
// @ts-expect-error The contents must be a string.
resourceDocument.TopElem.put_str(123, "example.txt");
// @ts-expect-error The filename must be a string.
resourceDocument.TopElem.put_str("contents", 123);
// @ts-expect-error The filename is required.
resourceDocument.TopElem.put_str("contents");
// @ts-expect-error The source must be an XML document.
resourceDocument.TopElem.put_str("contents", "example.txt", "source");
// @ts-expect-error Null is not an optional XML document.
resourceDocument.TopElem.put_str("contents", "example.txt", null);
