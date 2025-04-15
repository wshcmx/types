type EducationPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /**
   * Тип
   * @default collaborator
   */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация */
  person_org_name: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /**
   * Обновлять статусы и активности онлайн
   * @default false
   */
  update_status_and_activity: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  fact_finish_date: XmlElem<Date | null>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /** Последняя активность */
  last_activity_date: XmlElem<Date | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /**
   * Статус
   * @default 0
   */
  state_id: XmlElem<number, typeof common.education_learning_states>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** План развития */
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
