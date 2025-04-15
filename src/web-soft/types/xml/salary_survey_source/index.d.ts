type SalarySurveySourceDocumentTopElem = XmlTopElem & {
  Doc: SalarySurveySourceDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type SalarySurveySourceDocument = XmlDocument & {
  TopElem: SalarySurveySourceDocumentTopElem;
  salary_survey_source: SalarySurveySourceDocumentTopElem;
  DocDesc(): string;
};
