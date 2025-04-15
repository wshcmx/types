type WorkExperienceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkExperienceDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type WorkExperienceDocument = XmlDocument & {
  TopElem: WorkExperienceDocumentTopElem;
  work_experience: WorkExperienceDocumentTopElem;
  DocDesc(): string;
};
