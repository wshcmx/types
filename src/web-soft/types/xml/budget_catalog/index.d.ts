type BudgetCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Утвержден
   * @default false
   */
  is_approved: XmlElem<boolean>;
  /** Тип бюджета */
  type_id: XmlElem<number | null, BudgetTypeCatalogDocumentTopElem>;
  /** Статус */
  state: XmlElem<string | null, typeof common.budget_state_types>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Статья затрат */
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
