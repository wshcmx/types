type LibrarySectionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Официальное название */
  name: XmlElem<string | null>;
  /** Родительский раздел */
  parent_object_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  /** Позиция */
  position: XmlElem<number | null>;
  /** Ссылка */
  link: XmlElem<string | null>;
  /** Идентификатор во внешнем источнике */
  external_id: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
