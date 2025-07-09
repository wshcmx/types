type RecommenderSelectCollaboratorCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Рекомендательный алгоритм */
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /** Базовый объект */
  base_object_id: XmlElem<number | null>;
  /** Тип базового объект */
  base_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Базовый объект */
  base_object_name: XmlElem<string | null>;
  /** Выбранный объект */
  selected_object_id: XmlElem<number | null>;
  /** Тип выбранного объект */
  selected_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Выбранный объект */
  selected_object_name: XmlElem<string | null>;
  /** Созданный объект */
  created_object_id: XmlElem<number | null>;
  /** Тип созданного объект */
  created_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Созданный объект */
  created_object_name: XmlElem<string | null>;
  /**
   * Реализовано
   * @default false
   */
  implemented: XmlElem<boolean>;
  /** Дата выбора */
  selected_date: XmlElem<Date | null>;
  /** Дата реализации */
  implemented_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
