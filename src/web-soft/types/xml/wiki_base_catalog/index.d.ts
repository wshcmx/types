type WikiBaseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default public
   */
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  previous_version_object_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /**
   * При создании новой статьи копировать права доступа из wiki базы
   * @default false
   */
  copy_access_in_new_article: XmlElem<boolean>;
  /**
   * Обрабатывается семантическим поиском
   * @default false
   */
  process_embedding: XmlElem<boolean>;
  /** Индексы поиска RAG */
  wiki_rag_indexes: XmlMultiElemObject<number | null, WikiRagIndexCatalogDocumentTopElem>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
