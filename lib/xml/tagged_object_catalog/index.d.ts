type TaggedObjectCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  doc_create_date: XmlElem<Date | null>;
  require_acknowledgement: XmlElem<boolean | null>;
  tag_id: XmlElem<number | null, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
