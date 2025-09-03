type RecruitmentPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /**
   * Статус
   * @default plan
   */
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /**
   * Тип должности
   * @default name
   */
  position_type: XmlElem<string | null>;
  /** Должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Тип вакансий */
  vacancy_type_id: XmlElem<number | null, VacancyTypeCatalogDocumentTopElem>;
  /** Общая численность */
  quantity: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
