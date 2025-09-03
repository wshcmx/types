type BonusItemCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
  /** Результат */
  result: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
