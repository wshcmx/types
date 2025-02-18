type ProjectParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип участника проекта */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  /** Роли участников проекта */
  participant_roles_id: XmlMultiElemObject<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
  /**
   * Исключен из проекта
   * @default false
   */
  is_excluded: XmlElem<boolean>;
  /** Дата начала участия */
  start_date: XmlElem<Date | null>;
  /** Дата окончания участия */
  finish_date: XmlElem<Date | null>;
  /** Плановая загрузка (в часах) */
  plan_load: XmlElem<number | null>;
  /** Плановая загрузка от рабочего времени (в процентах) */
  percent_plan_load: XmlElem<number | null>;
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
