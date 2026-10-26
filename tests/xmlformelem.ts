type XmlFormElemTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertXmlFormElemType<T extends true>(value: unknown): T;

declare const lookupFormElement: XmlFormElem;

const defaultFormPathElement = lookupFormElement.EvalPath("child");
assertXmlFormElemType<XmlFormElemTypesEqual<typeof defaultFormPathElement, XmlElem<unknown>>>(defaultFormPathElement);
alert(defaultFormPathElement.Name);

const typedFormPathElement = lookupFormElement.EvalPath<XmlElem<{ childOnly: XmlElem<string> }>>("child");
assertXmlFormElemType<XmlFormElemTypesEqual<typeof typedFormPathElement, XmlElem<{ childOnly: XmlElem<string> }>>>(typedFormPathElement);
alert(typedFormPathElement.childOnly.Value);

const customFormPathValue = lookupFormElement.EvalPath<string>("child.Value");
assertXmlFormElemType<XmlFormElemTypesEqual<typeof customFormPathValue, string>>(customFormPathValue);

// @ts-expect-error The default result does not expose arbitrary child fields.
alert(defaultFormPathElement.childOnly);
// @ts-expect-error Explicit result types are preserved.
alert(typedFormPathElement.missingChild);
// @ts-expect-error The path must be a string.
lookupFormElement.EvalPath(1);
// @ts-expect-error The path is required.
lookupFormElement.EvalPath();
