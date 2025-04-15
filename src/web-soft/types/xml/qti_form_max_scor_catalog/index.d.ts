interface QtiFormMaxScoreDocumentAssessment {
  max_score: XmlElem<number>;
}

type QtiFormMaxScorCatalogDocumentTopElem = XmlTopElem & {
  assessment: XmlElem<QtiFormMaxScoreDocumentAssessment>;
};
