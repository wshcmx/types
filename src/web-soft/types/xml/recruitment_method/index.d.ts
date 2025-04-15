type RecruitmentMethodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: RecruitmentMethodDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type RecruitmentMethodDocument = XmlDocument & {
  TopElem: RecruitmentMethodDocumentTopElem;
  recruitment_method: RecruitmentMethodDocumentTopElem;
  DocDesc(): string;
};
