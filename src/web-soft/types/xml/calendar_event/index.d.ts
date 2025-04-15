interface CalendarEventDocumentBlockParticipantParticipant {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Признак подтверждения участия
   * @default false
   */
  is_confirm: XmlElem<boolean>;
  /**
   * Отказался от участия
   * @default false
   */
  not_participate: XmlElem<boolean>;
}

interface CalendarEventDocumentBlockParticipant {
  /** Участники */
  participants: XmlMultiElem<CalendarEventDocumentBlockParticipantParticipant | null>;
}

interface CalendarEventDocumentBlockTutorTutor {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface CalendarEventDocumentBlockTutor {
  /** Ответственные */
  tutors: XmlMultiElem<CalendarEventDocumentBlockTutorTutor | null>;
}

interface CalendarEventDocumentBlockSchedulerWeekDay {
  week_day_id: XmlElem<string | null, typeof common.week_day_types>;
}

interface CalendarEventDocumentBlockScheduler {
  /**
   * Тип расписания
   * @default none
   */
  scheduler_type_id: XmlElem<string | null, typeof common.scheduler_types>;
  /** Неделя в месяце */
  week_type_id: XmlElem<string | null, typeof common.week_types>;
  /** Расписание по дням недели */
  week_days: XmlMultiElem<CalendarEventDocumentBlockSchedulerWeekDay | null>;
}

interface CalendarEventDocumentBlockNotificationNotificationReminder {
  id: XmlElem<string | null>;
  /** Минут до начала события */
  minutes: XmlElem<number | null>;
}

interface CalendarEventDocumentBlockNotification {
  /** Настройки уведомлений до начала события */
  notification_reminders: XmlMultiElem<CalendarEventDocumentBlockNotificationNotificationReminder | null>;
}

interface CalendarEventDocumentCall {
  /**
   * Разрешить записывать звонки
   * @default false
   */
  allow_write: XmlElem<boolean>;
  /**
   * Разрешить расшифровывать звонки
   * @default false
   */
  allow_recognition: XmlElem<boolean>;
  /**
   * Разрешить автоматическое формирование резюме по звонку
   * @default false
   */
  allow_summary: XmlElem<boolean>;
}

type CalendarEventDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
PersonFillingBase & {
  Doc: CalendarEventDocument;
  /** Создатель */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  block_participant: XmlElem<CalendarEventDocumentBlockParticipant | null>;
  block_tutor: XmlElem<CalendarEventDocumentBlockTutor | null>;
  /**
   * Исключение из расписание
   * @default false
   */
  is_exception: XmlElem<boolean | null>;
  /**
   * Событие удалено из расписания
   * @default false
   */
  is_deleted: XmlElem<boolean | null>;
  /** Код исключения */
  instance_code: XmlElem<string | null>;
  /** Родительское событие */
  parent_id: XmlElem<number | null, CalendarEventCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
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
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Расписание */
  block_scheduler: XmlElem<CalendarEventDocumentBlockScheduler | null>;
  block_notification: XmlElem<CalendarEventDocumentBlockNotification | null>;
  /**
   * Статус
   * @default plan
   */
  state_id: XmlElem<string | null, typeof common.event_status_types>;
  call: XmlElem<CalendarEventDocumentCall | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type CalendarEventDocument = XmlDocument & {
  TopElem: CalendarEventDocumentTopElem;
  calendar_event: CalendarEventDocumentTopElem;
  DocDesc(): string;
};
