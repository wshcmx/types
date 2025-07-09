type CollaboratorScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
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
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  /** График */
  schedule_day_id: XmlElem<number | null, ScheduleDayCatalogDocumentTopElem>;
  /** Интервал графика */
  interval_schedule_id: XmlElem<number | null, IntervalScheduleCatalogDocumentTopElem>;
  /** Тип графика */
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Дата согласования */
  approval_date: XmlElem<Date | null>;
  /** Согласующий */
  approval_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Ограничения */
  rest_collaborator_schedule_id: XmlElem<number | null, RestrictingCollaboratorScheduleCatalogDocumentTopElem>;
  /** Комментарий причины согласования/отмены */
  reason_comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
