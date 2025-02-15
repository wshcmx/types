type ActiveLearningCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Название курса */
  course_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Организация */
  person_org_name: XmlElem<string | null>;
  /** Подразделение */
  person_subdivision_name: XmlElem<string | null>;
  /** Код сервера сотрудника */
  person_instance_id: XmlElem<string | null>;
  /** Текущее состояние сотрудника */
  person_current_state: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Название мероприятия */
  event_name: XmlElem<string | null>;
  /** Дата начала мероприятия */
  event_start_date: XmlElem<Date | null>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата начала обучения */
  start_learning_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Название последней просмотренной части курса */
  last_usage_part_code: XmlElem<string | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Баллы */
  score: XmlElem<number | null>;
  /**
   * Состояние
   * @default 0
   */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Время модулей */
  time: XmlElem<number | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Назначен самостоятельно */
  is_self_enrolled: XmlElem<boolean | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Пользователь */
  creation_user_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Пользователь */
  modification_user_id: XmlElem<number | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
