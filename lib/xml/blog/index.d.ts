interface BlogDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @default false */
  is_full_moderator: XmlElem<boolean | null>;
}

interface BlogDocumentView extends DescBase {
  /** @default person_fullname */
  author_sort_type: XmlElem<string | null>;
}

type BlogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
PersonFillingBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BlogDocument;
  /** Дата */
  create_date: XmlElem<Date | null>;
  /**
   * Тип блога
   * @default blog
   */
  type: XmlElem<string, typeof common.blog_types>;
  /** Провайдер канала */
  channel_provider_id: XmlElem<number | null, ChannelProviderCatalogDocumentTopElem>;
  /**
   * Возможна подписка
   * @default false
   */
  permit_subscription: XmlElem<boolean>;
  /**
   * Разрешить оставлять анонимные комментарии
   * @default false
   */
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default collaborator
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Авторы */
  authors: XmlMultiElem<BlogDocumentAuthor | null>;
  /** Количество авторов */
  authors_num(): unknown;
  /**
   * Количество сообщений на странице
   * @default 20
   */
  num_message_in_list: XmlElem<number | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<BlogDocumentView | null>;
  creator_full_info(): unknown;
};

type BlogDocument = XmlDocument & {
  TopElem: BlogDocumentTopElem;
  blog: BlogDocumentTopElem;
  DocDesc(): string;
};
