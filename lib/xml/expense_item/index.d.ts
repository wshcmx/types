type ExpenseItemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExpenseItemDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Активная
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Родительская статья затрат */
  parent_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExpenseItemDocument = XmlDocument & {
  TopElem: ExpenseItemDocumentTopElem;
  expense_item: ExpenseItemDocumentTopElem;
  DocDesc(): string;
};
