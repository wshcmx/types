type PaCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Планы оценки */
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  /** Оцениваемый сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оцениваемого */
  person_fullname: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_name: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Подразделение */
  person_position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Оценивающий сотрудник */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оценивающего */
  expert_person_fullname: XmlElem<string | null>;
  /** Должность оценивающего */
  expert_person_position_name: XmlElem<string | null>;
  /** Должность */
  expert_person_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Подразделение */
  expert_person_position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Согласующие эксперты */
  custom_experts: XmlElem<string | null>;
  /** Согласующие эксперты */
  custom_experts_array: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Согласующие эксперты
   * @default false
   */
  is_custom_experts: XmlElem<boolean>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /**
   * Оценка сотрудника/подразделения
   * @default false
   */
  flag_appraise_department: XmlElem<boolean>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** с */
  period_start: XmlElem<Date | null>;
  /** по */
  period_end: XmlElem<Date | null>;
  /** Тип оценки */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /**
   * Признак готовности (для параллельной оценки)
   * @default false
   */
  is_ready: XmlElem<boolean>;
  /**
   * Признак результирующей формы
   * @default false
   */
  is_final: XmlElem<boolean>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Итоговая оценка */
  overall: XmlElem<number | null>;
  /** Дата последнего сохранения на портале */
  appraise_date: XmlElem<Date | null>;
  /** Порядковый номер */
  index: XmlElem<number | null>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Дата завершения */
  workflow_state_last_date: XmlElem<Date | null>;
  /** ДО инициализирован */
  is_workflow_init: XmlElem<boolean | null>;
  /**
   * Задействовался/не задействовался
   * @default false
   */
  flag_is_processed: XmlElem<boolean>;
  /** Сотрудник */
  workflow_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** План. дата завершения */
  workflow_end_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
