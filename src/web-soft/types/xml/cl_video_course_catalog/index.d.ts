type ClVideoCourseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата последней компиляции курса */
  last_compile_date: XmlElem<Date | null>;
  /** Результирующий медиа-файл */
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Упрощенный результирующий медиа-файл */
  simple_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Авторы */
  authors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  OnBuild(): void;
};
