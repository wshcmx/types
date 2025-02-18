type RecommenderSelectCollaboratorDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderSelectCollaboratorDocument;
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Рекомендательный алгоритм */
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /** Базовый объект */
  base_object: XmlElem<ObjectTypeBase | null>;
  /** Выбранный объект */
  selected_object: XmlElem<ObjectTypeBase | null>;
  /** Созданный объект */
  created_object: XmlElem<ObjectTypeBase | null>;
  /**
   * Реализовано
   * @default false
   */
  implemented: XmlElem<boolean>;
  /** Дата выбора */
  selected_date: XmlElem<Date | null>;
  /** Дата реализации */
  implemented_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderSelectCollaboratorDocument = XmlDocument & {
  TopElem: RecommenderSelectCollaboratorDocumentTopElem;
  recommender_select_collaborator: RecommenderSelectCollaboratorDocumentTopElem;
};
