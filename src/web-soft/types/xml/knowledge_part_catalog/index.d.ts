type KnowledgePartCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Родительское значение */
  parent_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Требует подтверждения эксперта */
  require_acknowledgement: XmlElem<boolean | null>;
  previous_version_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  knowledge_part_type_id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
  /** Тип подтверждения */
  confirmation_type: XmlElem<string | null, typeof common.confirmation_types>;
  /** Индекс уровня экспертизы */
  expertise_level_index: XmlElem<number | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
