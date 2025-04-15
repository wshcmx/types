type StatementAttachmentDocumentTopElem = XmlTopElem & {
  Doc: StatementAttachmentDocument;
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** ID использования */
  usage_type: XmlElem<string | null>;
  /** Тип содержимого */
  content_type: XmlElem<string | null>;
  /** Длина данных */
  length: XmlElem<string | null>;
  /** Хэш данных */
  file_hash: XmlElem<string | null>;
  /** Адрес данных */
  file_url: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementAttachmentDocument = XmlDocument & {
  TopElem: StatementAttachmentDocumentTopElem;
  statement_attachment: StatementAttachmentDocumentTopElem;
};
