type WorkModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkModeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type WorkModeDocument = XmlDocument & {
  TopElem: WorkModeDocumentTopElem;
  work_mode: WorkModeDocumentTopElem;
  DocDesc(): string;
};
