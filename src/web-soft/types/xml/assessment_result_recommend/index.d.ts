interface AssessmentResultRecommendDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type AssessmentResultRecommendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: AssessmentResultRecommendDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<number | null, typeof common.assessment_appraise_recommend_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<AssessmentResultRecommendDocumentView | null>;
};

type AssessmentResultRecommendDocument = XmlDocument & {
  TopElem: AssessmentResultRecommendDocumentTopElem;
  assessment_result_recommend: AssessmentResultRecommendDocumentTopElem;
  DocDesc(): string;
};
