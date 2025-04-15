type WebPersonStateDocumentTopElem = XmlTopElem & {
  Doc: WebPersonStateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default general
   */
  type_id: XmlElem<string | null, typeof common.web_person_state_types>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type WebPersonStateDocument = XmlDocument & {
  TopElem: WebPersonStateDocumentTopElem;
  web_person_state: WebPersonStateDocumentTopElem;
};
