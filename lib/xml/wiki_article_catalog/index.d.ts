type WikiArticleCatalogDocumentTopElem = XmlTopElem &
ChangeHashFieldsBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Wiki база */
  wiki_base_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  /**
   * Тип контента
   * @default html
   */
  content_type: XmlElem<string | null>;
  /** Тип wiki статьи */
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /**
   * Тип ознакомления
   * @default none
   */
  acquaint_type_id: XmlElem<string | null, typeof common.acquaint_types>;
  /**
   * Статус
   * @default active
   */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Авторы */
  author_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Типы руководителей авторов */
  author_boss_type_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата публикации */
  publicate_date: XmlElem<Date | null>;
  /** Дата публикации критичных изменений */
  critical_publicate_date: XmlElem<Date | null>;
  /** Группы для ознакомления */
  acquaint_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  /** Аннотация */
  annotation: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Файлы */
  files_id: XmlMultiElemObject<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Группы прав доступа */
  access_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  /**
   * Анонимный доступ
   * @default false
   */
  enable_anonymous_access: XmlElem<boolean | null>;
  OnBuild(): void;
};
