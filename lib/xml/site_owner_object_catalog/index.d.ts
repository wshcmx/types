type SiteOwnerObjectCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  /** Каталог */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
