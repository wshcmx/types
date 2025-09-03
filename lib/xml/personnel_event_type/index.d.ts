type PersonnelEventTypeDocumentTopElem = XmlTopElem & {
  Doc: PersonnelEventTypeDocument;
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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

type PersonnelEventTypeDocument = XmlDocument & {
  TopElem: PersonnelEventTypeDocumentTopElem;
  personnel_event_type: PersonnelEventTypeDocumentTopElem;
  DocDesc(): string;
};
