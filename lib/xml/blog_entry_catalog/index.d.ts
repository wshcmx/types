type BlogEntryCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Комментарии разрешены */
  allow_comment: XmlElem<boolean | null>;
  /**
   * Заблокировано
   * @default false
   */
  blocked: XmlElem<boolean>;
  /** Ярлыки сообщения */
  labels: XmlElem<string | null>;
  /** Автор */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО автора */
  person_fullname: XmlElem<string | null>;
  /** Блог */
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  /** ID статьи в ленте */
  feed_item_id: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Число комментариев */
  comment_num: XmlElem<number | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
