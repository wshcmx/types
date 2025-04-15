interface CollaboratorScheduleDocumentPeriod extends ObjectTypeBase, CustomElemsBase {
  id: XmlElem<string | null>;
  /** Тип присутствия/отсутствия */
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof lists.person_states>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type CollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: CollaboratorScheduleDocument;
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
  /** Тип присутствия/отсутствия */
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
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
  /** Интервал графика */
  interval_schedule_id: XmlElem<number | null, IntervalScheduleCatalogDocumentTopElem>;
  /** График */
  schedule_day_id: XmlElem<number | null, ScheduleDayCatalogDocumentTopElem>;
  /** Период */
  periods: XmlMultiElem<CollaboratorScheduleDocumentPeriod | null>;
  /** Комментарий причины согласования/отмены */
  reason_comment: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CollaboratorScheduleDocument = XmlDocument & {
  TopElem: CollaboratorScheduleDocumentTopElem;
  collaborator_schedule: CollaboratorScheduleDocumentTopElem;
};
