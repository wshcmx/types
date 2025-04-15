type EducationModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationModeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type EducationModeDocument = XmlDocument & {
  TopElem: EducationModeDocumentTopElem;
  education_mode: EducationModeDocumentTopElem;
  DocDesc(): string;
};
