type BlogEntryCommentDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: BlogEntryCommentDocument;
  id: XmlElem<number | null>;
  /** Дата */
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
  /** Автор */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский документ в иерархии */
  parent_id: XmlElem<number | null, BlogEntryCommentCatalogDocumentTopElem>;
  /** Оценка */
  like_id: XmlElem<number | null, LikeCatalogDocumentTopElem>;
  /** Сообщение */
  message: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Тип
   * @default fullname
   */
  type: XmlElem<string | null>;
  creator_name(): string;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type BlogEntryCommentDocument = XmlDocument & {
  TopElem: BlogEntryCommentDocumentTopElem;
  blog_entry_comment: BlogEntryCommentDocumentTopElem;
  DocDesc(): string;
};
