type EventCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /**
   * Эталонное мероприятие
   * @default false
   */
  is_model: XmlElem<boolean>;
  /**
   * Использовать виртуальный класс
   * @default false
   */
  use_vclass: XmlElem<boolean>;
  /** Виртуальный класс */
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Модульная программа (источник) */
  create_compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Сервер Виртуального класса */
  vclass_host: XmlElem<string | null>;
  /**
   * Вебинар не записан
   * @default false
   */
  record_exists: XmlElem<boolean>;
  /**
   * Запись доступна для просмотра
   * @default false
   */
  show_record: XmlElem<boolean>;
  /** Базовое мероприятие */
  parent_event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Завершенных курсов */
  course_finished: XmlElem<number | null>;
  /** Активных курсов */
  course_process: XmlElem<number | null>;
  /** Неначатых курсов */
  course_started: XmlElem<number | null>;
  /** Начатых курсов */
  course_began: XmlElem<number | null>;
  /** Завершенных тестов */
  test_finished: XmlElem<number | null>;
  /** Активных тестов */
  test_process: XmlElem<number | null>;
  /** Неначатых тестов */
  test_started: XmlElem<number | null>;
  /** Начатых тестов */
  test_began: XmlElem<number | null>;
  /**
   * Группа сформирована
   * @default false
   */
  group_formed: XmlElem<boolean>;
  /** Курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** План мероприятий */
  training_plan_id: XmlElem<number | null, TrainingPlanCatalogDocumentTopElem>;
  /**
   * Является публичным
   * @default false
   */
  is_public: XmlElem<boolean>;
  /**
   * Является открытым
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /**
   * Тип стоимости
   * @default person
   */
  cost_type: XmlElem<string | null, typeof common.cost_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /**
   * Распределение общей стоимости
   * @default person
   */
  distribute_cost_type: XmlElem<string>;
  /** Фактическое количество часов */
  duration_fact: XmlElem<number | null>;
  /** Фактическое количество дней */
  duration_days_fact: XmlElem<number | null>;
  /**
   * Обязательное заполнение отзыва
   * @default false
   */
  mandatory_fill_response: XmlElem<boolean>;
  /** Форма проведения */
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  /** Основное подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Основная организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Тип отправки уведомлений */
  send_type: XmlElem<string | null>;
  /** Типы получателей уведомлений */
  send_persons_types: XmlElem<string | null>;
  /** Группа обучения */
  group_educ_group_id: XmlElem<string | null>;
  /** Система вебинаров */
  webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Ответственный */
  tutor_main: XmlElem<string | null>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Время следующего уведомления */
  notification_reminder_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
