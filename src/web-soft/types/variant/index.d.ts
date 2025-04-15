type Variant<T> = Pick<XmlElem<{
  Object: T;
  Value: T;
}>, XmlElemNonMethodsKeys>;
