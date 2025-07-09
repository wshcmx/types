type DocumentCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Тип объекта */
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  parent_object_id: XmlElem<number | null>;
  /** Название объекта */
  parent_object_name: XmlElem<string | null>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Раздел портала */
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя сотрудника */
  person_fullname: XmlElem<string | null>;
  /**
   * Может создавать
   * @default true
   */
  can_create: XmlElem<boolean | null>;
  /**
   * Может редактировать
   * @default true
   */
  can_edit: XmlElem<boolean | null>;
  /**
   * Может удалять
   * @default true
   */
  can_delete: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
