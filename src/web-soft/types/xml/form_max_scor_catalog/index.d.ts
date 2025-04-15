interface FormMaxScoreDocumentAssessment {
  max_score: XmlElem<number>;
}

type FormMaxScorCatalogDocumentTopElem = XmlTopElem & {
  assessment: XmlElem<FormMaxScoreDocumentAssessment>;
};
