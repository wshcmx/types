type WebsoftTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertWebsoftType<T extends true>(value: unknown): T;

const websoftRegExp = tools.get_object_assembly("RegExp");
websoftRegExp.Pattern = "[0-9]+";

const matchesWithStoredPattern = websoftRegExp.IsMatch("item42");
const matchesWithExplicitPattern = websoftRegExp.IsMatch("item42", "[0-9]+");
assertWebsoftType<WebsoftTypesEqual<typeof matchesWithStoredPattern, boolean>>(matchesWithStoredPattern);
assertWebsoftType<WebsoftTypesEqual<typeof matchesWithExplicitPattern, boolean>>(matchesWithExplicitPattern);

const replacedWithStoredPattern = websoftRegExp.Replace("item42", "value");
const replacedWithExplicitPattern = websoftRegExp.Replace("item42", "value", "[0-9]+");
assertWebsoftType<WebsoftTypesEqual<typeof replacedWithStoredPattern, string>>(replacedWithStoredPattern);
assertWebsoftType<WebsoftTypesEqual<typeof replacedWithExplicitPattern, string>>(replacedWithExplicitPattern);

// @ts-expect-error The source string is required.
websoftRegExp.IsMatch();
// @ts-expect-error The source must be a string.
websoftRegExp.IsMatch(42, "[0-9]+");
// @ts-expect-error The explicit pattern must be a string.
websoftRegExp.IsMatch("item42", 42);
// @ts-expect-error The replacement string is required.
websoftRegExp.Replace("item42");
// @ts-expect-error The source must be a string.
websoftRegExp.Replace(42, "value", "[0-9]+");
// @ts-expect-error The replacement must be a string.
websoftRegExp.Replace("item42", 42, "[0-9]+");
// @ts-expect-error The explicit pattern must be a string.
websoftRegExp.Replace("item42", "value", 42);

const websoftExcel = tools.get_object_assembly("Excel");

const savedWithDefaultAutoFit = websoftExcel.SaveAs("report.xlsx");
const savedWithAutoFit = websoftExcel.SaveAs("report.xlsx", true);
const savedWithoutAutoFit = websoftExcel.SaveAs("report.xlsx", false);
const savedWithUndefinedAutoFit = websoftExcel.SaveAs("report.xlsx", undefined);
assertWebsoftType<WebsoftTypesEqual<typeof savedWithDefaultAutoFit, 0 | 1>>(savedWithDefaultAutoFit);
assertWebsoftType<WebsoftTypesEqual<typeof savedWithAutoFit, 0 | 1>>(savedWithAutoFit);
assertWebsoftType<WebsoftTypesEqual<typeof savedWithoutAutoFit, 0 | 1>>(savedWithoutAutoFit);
assertWebsoftType<WebsoftTypesEqual<typeof savedWithUndefinedAutoFit, 0 | 1>>(savedWithUndefinedAutoFit);

// @ts-expect-error The output path is required.
websoftExcel.SaveAs();
// @ts-expect-error The output path must be a string.
websoftExcel.SaveAs(42);
// @ts-expect-error The auto-fit flag must be a boolean.
websoftExcel.SaveAs("report.xlsx", "true");
// @ts-expect-error The auto-fit flag must be a boolean.
websoftExcel.SaveAs("report.xlsx", 1);
