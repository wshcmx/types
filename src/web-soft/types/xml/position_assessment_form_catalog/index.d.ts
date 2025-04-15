type PositionAssessmentFormCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
