type ContactResultDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactResultDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
};

type ContactResultDocument = XmlDocument & {
  TopElem: ContactResultDocumentTopElem;
  contact_result: ContactResultDocumentTopElem;
  DocDesc(): string;
};
