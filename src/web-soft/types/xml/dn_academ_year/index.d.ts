interface DnAcademYearDocumentPeriod {
  id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Описание */
  desc: XmlElem<string | null>;
}

type DnAcademYearDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAcademYearDocument;
  start_year: XmlElem<string | null>;
  end_year: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  amount_week_autumnal_term: XmlElem<number | null>;
  amount_week_spring_term: XmlElem<number | null>;
  str_years: XmlElem<string | null>;
  periods: XmlMultiElem<DnAcademYearDocumentPeriod | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnAcademYearDocument = XmlDocument & {
  TopElem: DnAcademYearDocumentTopElem;
  dn_academ_year: DnAcademYearDocumentTopElem;
  DocDesc(): string;
};
