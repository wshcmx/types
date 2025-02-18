interface RestrictingTypeDocumentRestricting {
  id: XmlElem<string | null>;
  /** Тип присутствия/отсутствия */
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  /** Время начала от */
  start_time_from: XmlElem<string | null>;
  /** Время начала по */
  start_time_to: XmlElem<string | null>;
  /** Время окончания от */
  end_time_from: XmlElem<string | null>;
  /** Время окончания по */
  end_time_to: XmlElem<string | null>;
  /** Количество рабочих дней min */
  min_work_days: XmlElem<number | null>;
  /** Количество рабочих дней max */
  max_work_days: XmlElem<number | null>;
  /** Min часов */
  min_hours: XmlElem<number | null>;
  /** Max часов */
  max_hours: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type RestrictingTypeDocumentTopElem = XmlTopElem & {
  Doc: RestrictingTypeDocument;
  id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default group
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип периода */
  period_type_id: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Ограничения */
  restrictings: XmlMultiElem<RestrictingTypeDocumentRestricting | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RestrictingTypeDocument = XmlDocument & {
  TopElem: RestrictingTypeDocumentTopElem;
  restricting_type: RestrictingTypeDocumentTopElem;
};
