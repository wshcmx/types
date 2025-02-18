interface BlogEntryDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type BlogEntryDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
GameBonusBase &
CustomElemsBase & {
  Doc: BlogEntryDocument;
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default post
   */
  type: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата редактирования */
  date_modified: XmlElem<Date | null>;
  /**
   * Разрешить читателям оставлять комментарии
   * @default true
   */
  allow_comment: XmlElem<boolean>;
  /**
   * Заблокировано
   * @default false
   */
  blocked: XmlElem<boolean>;
  /** Тело статьи */
  text_area: XmlElem<string | null>;
  /** Ярлыки сообщения */
  labels: XmlElem<string | null>;
  /** Автор */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Блог */
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  /** ID статьи в ленте */
  feed_item_id: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default collaborator
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /**
   * Количество комментариев
   * @default 0
   */
  comment_num: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<BlogEntryDocumentView | null>;
};

type BlogEntryDocument = XmlDocument & {
  TopElem: BlogEntryDocumentTopElem;
  blog_entry: BlogEntryDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
