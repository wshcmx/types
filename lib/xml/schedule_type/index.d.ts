interface ScheduleTypeDocumentScheduleDay {
  /** Тип */
  id: XmlElem<string | null, typeof common.day_types>;
  /** Время начала */
  start_time: XmlElem<string | null>;
  /** Время окончания */
  finish_time: XmlElem<string | null>;
}

interface ScheduleTypeDocumentSchedule extends MsWeekScheduleBase {
  days: XmlMultiElem<ScheduleTypeDocumentScheduleDay | null>;
}

type ScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: ScheduleTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default group
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /**
   * Расписание
   * @default true
   */
  is_shedule: XmlElem<boolean | null>;
  library_url: XmlElem<string | null>;
  /** Расписание прохождения */
  schedule: XmlElem<ScheduleTypeDocumentSchedule | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScheduleTypeDocument = XmlDocument & {
  TopElem: ScheduleTypeDocumentTopElem;
  schedule_type: ScheduleTypeDocumentTopElem;
};
