interface RewardDocumentBudgetPeriod {
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  /** Название */
  budget_period_name: XmlElem<string>;
  /** Численность */
  quantity: XmlElem<number>;
  /** Комментарий */
  comment: XmlElem<string>;
}

type RewardTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
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
  start_date: XmlElem<Date, null>;
  /** Периоды */
  budget_periods: XmlMultiElem<RewardDocumentBudgetPeriod | null>;
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