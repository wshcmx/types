type EducationPlanCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Корневой раздел */
  program_id: XmlElem<number | null>;
  /** Корневой раздел */
  parent_progpam_id: XmlElem<number | null>;
  /** Должность */
  position: XmlElem<number | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** План развития */
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /**
   * Тип
   * @default course
   */
  type: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код объекта */
  object_code: XmlElem<string | null>;
  /** Дата начала */
  object_start_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default 0
   */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Планируемая дата */
  plan_date: XmlElem<Date | null>;
  /**
   * Тип результата
   * @default active_learning
   */
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  result_object_id: XmlElem<number | null>;
  /** Название объекта */
  result_object_name: XmlElem<string | null>;
  /** Код */
  result_object_code: XmlElem<string | null>;
  result_object_start_date: XmlElem<Date | null>;
  result_object_finish_date: XmlElem<Date | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Название должности сотрудника */
  person_position: XmlElem<string | null>;
  /** Название организация */
  person_org_name: XmlElem<string | null>;
  /** Название подразделения */
  person_subdivision_name: XmlElem<string | null>;
  /**
   * Является сотрудником
   * @default false
   */
  is_collaborator: XmlElem<boolean>;
  /**
   * Является преподавателем
   * @default false
   */
  is_tutor: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
