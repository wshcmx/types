type BlogCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип блога
   * @default blog
   */
  type: XmlElem<string, typeof common.blog_types>;
  /** Провайдер канала */
  channel_provider_id: XmlElem<number | null, ChannelProviderCatalogDocumentTopElem>;
  /**
   * Возможность подписки на блог
   * @default false
   */
  permit_subscription: XmlElem<boolean>;
  /**
   * Возможность оставлять анонимные комментарии
   * @default false
   */
  allow_anonymous_comment: XmlElem<boolean>;
  /** Создатель блога */
  creator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО, должность, подразделение создателя блога */
  creator_full_info: XmlElem<string | null>;
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
   * Количество авторов
   * @default 0
   */
  authors_num: XmlElem<number | null>;
  /** Авторы */
  authors: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
