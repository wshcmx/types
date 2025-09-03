interface RewardTypesDocumentBudgetPeriod {
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Название */
  budget_period_name: XmlElem<string | null>;
  /** Численность */
  quantity: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type RewardTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Периоды */
  budget_periods: XmlMultiElem<RewardTypesDocumentBudgetPeriod | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
