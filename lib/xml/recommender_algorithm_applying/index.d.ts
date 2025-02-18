interface RecommenderAlgorithmApplyingDocumentApplyDate {
  /** Дата применения */
  date: XmlElem<Date | null>;
}

type RecommenderAlgorithmApplyingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderAlgorithmApplyingDocument;
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Рекомендательный алгоритм */
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /** Базовый объект */
  base_object: XmlElem<ObjectTypeBase | null>;
  /** Контекстный объект */
  context_object: XmlElem<ObjectTypeBase | null>;
  /**
   * Количество
   * @default 0
   */
  count: XmlElem<number | null>;
  /** Дата применения */
  applying_date: XmlElem<Date | null>;
  /** Дата применения */
  apply_dates: XmlMultiElem<RecommenderAlgorithmApplyingDocumentApplyDate | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderAlgorithmApplyingDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmApplyingDocumentTopElem;
  recommender_algorithm_applying: RecommenderAlgorithmApplyingDocumentTopElem;
};
