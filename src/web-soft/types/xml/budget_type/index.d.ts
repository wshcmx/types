type BudgetTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: BudgetTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type BudgetTypeDocument = XmlDocument & {
  TopElem: BudgetTypeDocumentTopElem;
  budget_type: BudgetTypeDocumentTopElem;
  DocDesc(): string;
};
