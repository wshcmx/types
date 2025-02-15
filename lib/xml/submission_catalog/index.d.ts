type SubmissionCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип отчетной формы */
  submission_type_id: XmlElem<number | null, SubmissionTypeCatalogDocumentTopElem>;
  /** Название типа */
  submission_type_name: XmlElem<string | null>;
  /** Дата начала периода */
  period_date_start: XmlElem<Date | null>;
  /** Дата окончания периода */
  period_date_finish: XmlElem<Date | null>;
  /** Этап */
  phase_name: XmlElem<string | null>;
  /** Этап */
  phase_id: XmlElem<number | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string, typeof common.submission_states>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
