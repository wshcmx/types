type QtiViewAssessmentCatalogDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  OnInit(): void;
};
