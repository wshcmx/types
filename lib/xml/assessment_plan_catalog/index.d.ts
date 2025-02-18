type AssessmentPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
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
  /** Оценка сотрудника/подразделения */
  flag_appraise_department: XmlElem<boolean | null>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Тип оценки */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Руководитель */
  boss_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Общая оценка */
  integral_mark: XmlElem<number | null>;
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
  /** Индекс */
  index: XmlElem<number | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** с */
  period_start: XmlElem<Date | null>;
  /** по */
  period_end: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
