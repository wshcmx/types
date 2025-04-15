type EducationFormDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationFormDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type EducationFormDocument = XmlDocument & {
  TopElem: EducationFormDocumentTopElem;
  education_form: EducationFormDocumentTopElem;
  DocDesc(): string;
};
