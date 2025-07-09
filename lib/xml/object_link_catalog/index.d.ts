type ObjectLinkCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Рекомендательный алгоритм */
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /** Дата расчета */
  calc_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
