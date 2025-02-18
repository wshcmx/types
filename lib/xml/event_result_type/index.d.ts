type EventResultTypeDocumentTopElem = XmlTopElem & {
  Doc: EventResultTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type EventResultTypeDocument = XmlDocument & {
  TopElem: EventResultTypeDocumentTopElem;
  event_result_type: EventResultTypeDocumentTopElem;
  DocDesc(): string;
};
