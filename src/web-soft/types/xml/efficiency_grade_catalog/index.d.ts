type EfficiencyGradeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /** Источник оценки */
  assessment_source: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Преемник */
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  /** Резервист */
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  /** Оценивающий */
  assessor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата оценки */
  assessment_date: XmlElem<Date | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
