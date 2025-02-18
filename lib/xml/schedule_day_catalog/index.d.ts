type ScheduleDayCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Тип графика */
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Тип графика */
  schedule_type_name: XmlElem<string | null>;
  /** Ограничения */
  rest_collaborator_schedule_id: XmlElem<number | null, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /**
   * Дата начала
   * @default 00:00
   */
  start_time: XmlElem<string | null>;
  /**
   * Дата окончания
   * @default 24:00
   */
  finish_time: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
