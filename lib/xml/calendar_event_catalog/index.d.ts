type CalendarEventCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
PersonFillingBase & {
  /** Создатель звонка */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Исключение из расписание
   * @default false
   */
  is_exception: XmlElem<boolean | null>;
  /** Код исключения */
  instance_code: XmlElem<string | null>;
  /**
   * Событие удалено из расписания
   * @default false
   */
  is_deleted: XmlElem<boolean | null>;
  /** Родительское событие */
  parent_id: XmlElem<number | null, CalendarEventCatalogDocumentTopElem>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
  participant_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  tutor_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  scheduler_week_days_ids: XmlMultiElemObject<string | null, typeof common.week_day_types>;
  /**
   * Время начала
   * @default 09:00
   */
  start_time: XmlElem<string | null>;
  /**
   * Время завершения
   * @default 09:00
   */
  end_time: XmlElem<string | null>;
  /**
   * Тип расписания
   * @default none
   */
  scheduler_type_id: XmlElem<string | null, typeof common.scheduler_types>;
  /** Неделя в месяце */
  week_type_id: XmlElem<string | null, typeof common.week_types>;
  confirm_participant_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  not_participate_participant_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Следующая дата запуска события */
  next_start_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.event_status_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Время следующего уведомления */
  notification_reminder_date: XmlElem<Date | null>;
  OnBuild(): void;
};
