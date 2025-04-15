type StatementComponentDocumentTopElem = XmlTopElem & {
  Doc: StatementComponentDocument;
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Название свойства */
  property_name: XmlElem<string | null, typeof common.statement_component_propertys>;
  /** ID компоненты */
  component_id: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementComponentDocument = XmlDocument & {
  TopElem: StatementComponentDocumentTopElem;
  statement_component: StatementComponentDocumentTopElem;
};
