type RecommenderAlgorithmApplyingCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Рекомендательный алгоритм */
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /** Тип контекстного объекта */
  context_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Контекстный объект */
  context_object_id: XmlElem<number | null>;
  /** Название контекстного объекта */
  context_object_name: XmlElem<string | null>;
  /** Количество */
  count: XmlElem<number | null>;
  /** Дата применения */
  applying_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
