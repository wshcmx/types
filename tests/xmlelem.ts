type XmlElemTypesEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;

declare function assertXmlElemType<T extends true>(value: unknown): T;

declare const lookupElement: XmlElem<{ parentOnly: string }>;
type LookupChild = XmlElem<{ childOnly: XmlElem<string> }>;

const defaultPathElement = lookupElement.EvalPath("child");
assertXmlElemType<XmlElemTypesEqual<typeof defaultPathElement, XmlElem<unknown>>>(defaultPathElement);

const typedPathElement = lookupElement.EvalPath<LookupChild>("child");
assertXmlElemType<XmlElemTypesEqual<typeof typedPathElement, LookupChild>>(typedPathElement);

const customPathValue = lookupElement.EvalPath<string>("child.Value");
assertXmlElemType<XmlElemTypesEqual<typeof customPathValue, string>>(customPathValue);

const defaultKeyElement = lookupElement.GetChildByKey("child");
const namedKeyElement = lookupElement.GetChildByKey(1, "id");
const explicitKeyElement = lookupElement.GetChildByKey<string>("child");
assertXmlElemType<XmlElemTypesEqual<typeof defaultKeyElement, XmlElem<XmlElem<unknown>>>>(defaultKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof namedKeyElement, XmlElem<XmlElem<unknown>>>>(namedKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof explicitKeyElement, XmlElem<XmlElem<unknown>>>>(explicitKeyElement);

const typedKeyElement = lookupElement.GetChildByKey<string, LookupChild>("child");
const typedNamedKeyElement = lookupElement.GetChildByKey<number, LookupChild>(1, "id");
assertXmlElemType<XmlElemTypesEqual<typeof typedKeyElement, XmlElem<LookupChild>>>(typedKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof typedNamedKeyElement, XmlElem<LookupChild>>>(typedNamedKeyElement);
alert(typedKeyElement.childOnly.Value);

const defaultOptionalKeyElement = lookupElement.GetOptChildByKey("child");
const namedOptionalKeyElement = lookupElement.GetOptChildByKey(1, "id");
const explicitOptionalKeyElement = lookupElement.GetOptChildByKey<string>("child");
assertXmlElemType<XmlElemTypesEqual<typeof defaultOptionalKeyElement, XmlElem<XmlElem<unknown>> | undefined>>(defaultOptionalKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof namedOptionalKeyElement, XmlElem<XmlElem<unknown>> | undefined>>(namedOptionalKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof explicitOptionalKeyElement, XmlElem<XmlElem<unknown>> | undefined>>(explicitOptionalKeyElement);

const typedOptionalKeyElement = lookupElement.GetOptChildByKey<string, LookupChild>("child");
const typedNamedOptionalKeyElement = lookupElement.GetOptChildByKey<number, LookupChild>(1, "id");
assertXmlElemType<XmlElemTypesEqual<typeof typedOptionalKeyElement, XmlElem<LookupChild> | undefined>>(typedOptionalKeyElement);
assertXmlElemType<XmlElemTypesEqual<typeof typedNamedOptionalKeyElement, XmlElem<LookupChild> | undefined>>(typedNamedOptionalKeyElement);

if (typedOptionalKeyElement !== undefined) {
  assertXmlElemType<XmlElemTypesEqual<typeof typedOptionalKeyElement, XmlElem<LookupChild>>>(typedOptionalKeyElement);
  alert(typedOptionalKeyElement.childOnly.Value);
}

// @ts-expect-error The default lookup result does not inherit the parent's fields.
alert(defaultKeyElement.parentOnly);
// @ts-expect-error Optional lookup results must be narrowed before accessing fields.
alert(typedOptionalKeyElement.childOnly);
// @ts-expect-error The result type must be an XML element.
lookupElement.GetChildByKey<string, number>("child");
// @ts-expect-error The result type must be an XML element.
lookupElement.GetOptChildByKey<string, number>("child");
// @ts-expect-error The key must match the explicit key type.
lookupElement.GetChildByKey<number, LookupChild>("child");
// @ts-expect-error The key must match the explicit key type.
lookupElement.GetOptChildByKey<number, LookupChild>("child");
// @ts-expect-error The path must be a string.
lookupElement.EvalPath(1);
// @ts-expect-error The key field name must be a string.
lookupElement.GetChildByKey(1, 2);
// @ts-expect-error The key field name must be a string.
lookupElement.GetOptChildByKey(1, 2);

{
  const element = CreateDynamicElem("name", "type") as XmlElem<number>;
  const clonedElement = element.CloneWithoutForm();
  alert(clonedElement.Name);

  const foundElement = clonedElement.GetChildIndexByValue(true);

  if (foundElement !== -1) {
    alert(foundElement.Name);
  }
}

{
  const doc = tools.open_doc<CollaboratorDocument>(1);

  if (doc != undefined) {
    doc.TopElem.firstname.Value = null;
  }

  if (doc !== undefined) {
    alert(doc.TopElem.custom_elems.ObtainChildByKey("custom_elem_field_name").value.Value);
    alert(doc.TopElem.custom_elems.GetChildByKey<string, XmlElem<CustomElemsBaseCustomElem>>("custom_elem_field_name").value.Value);
    doc.TopElem.firstname.ObtainChildByKey("custom_elem_field_name");
  }
}

{
  const careerReserveDocument = tools.open_doc<CareerReserveDocument>(1);

  if (careerReserveDocument !== undefined) {
    alert(careerReserveDocument.TopElem.custom_elems.ObtainChildByKey("custom_elem_field_name").value.Value);
    alert(careerReserveDocument.TopElem.custom_elems.GetChildByKey<string, XmlElem<CustomElemsBaseCustomElem>>("custom_elem_field_name").value.Value);
    careerReserveDocument.TopElem.person_id.Value = 1;
  }
}