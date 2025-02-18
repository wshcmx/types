type VacancySourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VacancySourceDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type VacancySourceDocument = XmlDocument & {
  TopElem: VacancySourceDocumentTopElem;
  vacancy_source: VacancySourceDocumentTopElem;
  DocDesc(): string;
};
