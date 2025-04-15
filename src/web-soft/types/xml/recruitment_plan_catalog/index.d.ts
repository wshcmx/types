type RecruitmentPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /**
   * Статус
   * @default plan
   */
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** @default name */
  position_type: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  vacancy_type_id: XmlElem<number | null, VacancyTypeCatalogDocumentTopElem>;
  quantity: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
