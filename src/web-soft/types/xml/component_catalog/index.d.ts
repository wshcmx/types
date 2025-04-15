interface ComponentsDocumentItem {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  path: XmlElem<string | null>;
}

interface ComponentsDocumentChangeLog {
  id: XmlElem<string | null>;
  version: XmlElem<string | null>;
  version_last: XmlElem<string | null>;
  update_date: XmlElem<Date | null>;
}

type ComponentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  version: XmlElem<string | null>;
  version_last: XmlElem<string | null>;
  update_date: XmlElem<Date | null>;
  path: XmlElem<string | null>;
  items: XmlMultiElem<ComponentsDocumentItem | null>;
  change_logs: XmlMultiElem<ComponentsDocumentChangeLog | null>;
};
