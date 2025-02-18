type ContactTypeDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ContactTypeDocument;
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

type ContactTypeDocument = XmlDocument & {
  TopElem: ContactTypeDocumentTopElem;
  contact_type: ContactTypeDocumentTopElem;
  DocDesc(): string;
};
