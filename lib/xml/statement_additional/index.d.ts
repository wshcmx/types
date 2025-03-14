type StatementAdditionalDocumentTopElem = XmlTopElem & {
  Doc: StatementAdditionalDocument;
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementAdditionalDocument = XmlDocument & {
  TopElem: StatementAdditionalDocumentTopElem;
  statement_additional: StatementAdditionalDocumentTopElem;
};
