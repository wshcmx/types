type FormInstPackCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  lng_id: XmlElem<string | null, LngCatalogDocumentTopElem>;
  url: XmlElem<string | null>;
  package_date: XmlElem<Date | null>;
  /** @default simple */
  type: XmlElem<string>;
  /** @default false */
  is_std: XmlElem<boolean | null>;
  /** @default false */
  is_demo: XmlElem<boolean | null>;
  /** @default false */
  always_update_objects: XmlElem<boolean | null>;
  /** @default false */
  processed: XmlElem<boolean | null>;
  process_date: XmlElem<Date | null>;
  process_log: XmlElem<string | null>;
};
