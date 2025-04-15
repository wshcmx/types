type VacancyReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyReasonDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type VacancyReasonDocument = XmlDocument & {
  TopElem: VacancyReasonDocumentTopElem;
  vacancy_reason: VacancyReasonDocumentTopElem;
  DocDesc(): string;
};
