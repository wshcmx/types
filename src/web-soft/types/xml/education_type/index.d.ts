type EducationTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type EducationTypeDocument = XmlDocument & {
  TopElem: EducationTypeDocumentTopElem;
  education_type: EducationTypeDocumentTopElem;
  DocDesc(): string;
};
