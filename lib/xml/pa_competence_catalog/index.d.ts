type PaCompetenceCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Формы оценки */
  pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Процедура оценки */
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
  /** Тип оценки */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<string | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
