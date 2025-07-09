type TestLearningCatalogDocumentTopElem = XmlTopElem &
AnnalsNumsBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Название теста */
  assessment_name: XmlElem<string | null>;
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
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата начала обучения */
  start_learning_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /** Баллы */
  score: XmlElem<number | null>;
  /** Описание итога */
  text_result: XmlElem<string | null>;
  /**
   * Состояние
   * @default 0
   */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Время модуля */
  time: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Ссылка на отчет внешней системы тестирования */
  link_report: XmlElem<string | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Активный тест */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Незаконченный тест */
  active_test_learning_id: XmlElem<number | null>;
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
  /** Назначен самостоятельно */
  is_self_enrolled: XmlElem<boolean | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
