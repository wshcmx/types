type TaskCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  /** Родительская задача */
  parent_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Источник транслирования */
  translated_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Тип получателя трансляции */
  translated_target_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Получатель трансляции */
  translated_target_id: XmlElem<number | null>;
  /** Назначивший задачу */
  assigner_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип ответственного */
  executor_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Ответственный за исполнение задачи */
  executor_id: XmlElem<number | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.task_statuses>;
  /** Настраиваемый статус */
  custom_state_id: XmlElem<string | null>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  /** Факт */
  fact: XmlElem<string | null>;
  /** Плановая величина (число) */
  plan_value: XmlElem<number | null>;
  /** Факт (число) */
  fact_value: XmlElem<number | null>;
  /** Оценка */
  value: XmlElem<number | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** Приоритет */
  priority: XmlElem<number | null>;
  /** Тип объекта-источника */
  source_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект-источник */
  source_object_id: XmlElem<number | null>;
  /** Этап договора */
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Тип объекта цели */
  target_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект цели */
  target_object_id: XmlElem<number | null>;
  /** Тип фактического объекта */
  fact_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Фактический объект */
  fact_object_id: XmlElem<number | null>;
  /** Эксперты */
  expert_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Фактическая дата начала */
  date_plan: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  date_fact: XmlElem<Date | null>;
  /** Планируемая дата начала */
  start_date_plan: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  end_date_plan: XmlElem<Date | null>;
  /** Бюджетный период */
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Бюджетный период */
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Плановые трудозатраты */
  plan_labor_costs: XmlElem<number | null>;
  /** Фактические трудозатраты */
  fact_labor_costs: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
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
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Сотрудник */
  preparation_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * К задаче прикреплены файлы
   * @default false
   */
  has_files: XmlElem<boolean>;
  /** Сотрудник */
  read_by_users: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  OnBuild(): void;
};
