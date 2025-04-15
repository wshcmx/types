type EventAssessmentPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Оцениваемый сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оцениваемого */
  person_fullname: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_name: XmlElem<string | null>;
  /** Оценивающий сотрудник */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оценивающего */
  expert_person_fullname: XmlElem<string | null>;
  /** Должность оценивающего */
  expert_person_position_name: XmlElem<string | null>;
  /** Дата */
  date_start: XmlElem<Date | null>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Тип оценки */
  assessment_type: XmlElem<string | null>;
  /** Код типа оценки */
  assessment_type_id: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
