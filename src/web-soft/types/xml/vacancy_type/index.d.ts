type VacancyTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type VacancyTypeDocument = XmlDocument & {
  TopElem: VacancyTypeDocumentTopElem;
  vacancy_type: VacancyTypeDocumentTopElem;
  DocDesc(): string;
};
