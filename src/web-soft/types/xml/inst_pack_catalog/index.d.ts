type InstPackCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  lng_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
  package_date: XmlElem<Date | null>;
  type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  is_demo: XmlElem<boolean>;
  always_update_objects: XmlElem<boolean>;
  processed: XmlElem<boolean>;
  process_date: XmlElem<Date | null>;
  process_log: XmlElem<string | null>;
};
