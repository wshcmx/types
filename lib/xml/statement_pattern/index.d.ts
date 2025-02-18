type StatementPatternDocumentTopElem = XmlTopElem & {
  Doc: StatementPatternDocument;
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Паттерн правильного ответа */
  value: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementPatternDocument = XmlDocument & {
  TopElem: StatementPatternDocumentTopElem;
  statement_pattern: StatementPatternDocumentTopElem;
};
