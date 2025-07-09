type DocumentCommentEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /**
   * Комментарий удален
   * @default false
   */
  deleted: XmlElem<boolean>;
  /** @default realname */
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string | null>;
  /** Сотрудник */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Форум */
  portal_doc_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Родительская статья форума */
  parent_document_entry_id: XmlElem<number | null, DocumentCommentEntryCatalogDocumentTopElem>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
