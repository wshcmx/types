type PositionAssessmentFormDocumentTopElem = XmlTopElem &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: PositionAssessmentFormDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Кто оценивает */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Оцениваемая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /**
   * Итоговый балл
   * @default 0
   */
  scale: XmlElem<number | null>;
  /** Уровень грейд */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionAssessmentFormDocument = XmlDocument & {
  TopElem: PositionAssessmentFormDocumentTopElem;
  position_assessment_form: PositionAssessmentFormDocumentTopElem;
  DocDesc(): string;
};
