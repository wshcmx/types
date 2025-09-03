type BlogEntryCommentCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Сообщение блога */
  blog_entry_id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default blog_entry
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Имя автора */
  creator_name: XmlElem<string | null>;
  /** Сообщение */
  message: XmlElem<string | null>;
  /** Родительский документ в иерархии */
  parent_id: XmlElem<number | null, BlogEntryCommentCatalogDocumentTopElem>;
  /** Оценка */
  like_id: XmlElem<number | null, LikeCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
