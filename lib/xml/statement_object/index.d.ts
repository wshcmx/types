type StatementObjectDocumentTopElem = XmlTopElem & {
  Doc: StatementObjectDocument;
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Название объекта */
  object_id: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Тип активности */
  definition_type: XmlElem<string | null>;
  /** Информация об активности */
  definition_more_info: XmlElem<string | null>;
  /** Тип взаимодействия */
  definition_interaction_type: XmlElem<string | null>;
  /** Тип активности в контексте */
  context_activity_type: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementObjectDocument = XmlDocument & {
  TopElem: StatementObjectDocumentTopElem;
  statement_object: StatementObjectDocumentTopElem;
};
