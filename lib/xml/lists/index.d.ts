interface ListsViewConditionsScheme extends ViewConditionsBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  catalog: XmlElem<string | null>;
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  /** @default false */
  disp_web: XmlElem<boolean>;
  /** @default false */
  is_parametric: XmlElem<boolean>;
}

interface ILists extends ExchangeListsBase {
  view_conditions_schemes: XmlMultiElem<ListsViewConditionsScheme>;
}

declare const lists: XmlElem<ILists>;
