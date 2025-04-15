interface ListsDocumentViewConditionsScheme extends ViewConditionsBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  catalog: XmlElem<string>;
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  disp_web: XmlElem<boolean>;
  is_parametric: XmlElem<boolean>;
}

type ListCatalogDocumentTopElem = XmlTopElem &
ExchangeListsBase & {
  view_conditions_schemes: XmlMultiElem<ListsDocumentViewConditionsScheme>;
};
