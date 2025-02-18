type LearningTaskResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Задание */
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
  /** Название задания */
  learning_task_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО пользователя */
  person_fullname: XmlElem<string | null>;
  /** Эксперт */
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /**
   * Статус
   * @default process
   */
  status_id: XmlElem<string | null, typeof common.learning_task_status_types>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Дата назначения */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Дата/время начала выполнения */
  start_execution_date: XmlElem<Date | null>;
  /** Дата/время завершения выполнения */
  finish_execution_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
  /** Продолжительность выполнения */
  duration: XmlElem<number | null>;
  /**
   * Просрочено
   * @default false
   */
  expired: XmlElem<boolean>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Незаконченный электронный курс */
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
