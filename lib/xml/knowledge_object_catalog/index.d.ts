type KnowledgeObjectCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_status: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  object_start_date: XmlElem<Date | null>;
  object_end_date: XmlElem<Date | null>;
  doc_create_date: XmlElem<Date | null>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string | null>;
  /** Текущий уровень */
  current_level_id: XmlElem<string | null>;
  /** Текущий уровень */
  current_level_name: XmlElem<string | null>;
  /** Индекс текущего уровня */
  current_level_index: XmlElem<number | null>;
  /** Целевой уровень */
  target_level_id: XmlElem<string | null>;
  /** Целевой уровень */
  target_level_name: XmlElem<string | null>;
  /** Индекс целевого уровня */
  target_level_index: XmlElem<number | null>;
  require_acknowledgement: XmlElem<boolean | null>;
  knowledge_part_level_id: XmlElem<number | null, KnowledgePartLevelCatalogDocumentTopElem>;
  acquaint_time: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
