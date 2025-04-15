interface LearningDocumentEvent {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  score: XmlElem<number | null>;
}

interface LearningDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /**
   * @temp
   * @default result
   */
  result_tab_selector: XmlElem<string>;
}

type LearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LearningDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Название электронного курса */
  course_name: XmlElem<string | null>;
  /** Код электронного курса */
  course_code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
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
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Разделы */
  parts: XmlMultiElem<LearningPartBase | null>;
  /**
   * Не кодировать данные модуля при запуске курса
   * @default false
   */
  no_encoding_core_lesson: XmlElem<boolean | null>;
  /** Время модулей */
  time: XmlElem<number | null>;
  /** Мероприятия */
  events: XmlMultiElem<LearningDocumentEvent | null>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  /**
   * Назначен самостоятельно
   * @default false
   */
  is_self_enrolled: XmlElem<boolean>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /** Базовый url */
  base_url: XmlElem<string | null>;
  /**
   * Максимальный балл
   * @default 0
   */
  max_score: XmlElem<number>;
  /** Баллы */
  score: XmlElem<number | null>;
  text_result: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<number | null, typeof common.learning_states>;
  /** Незаконченный курс */
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  active_learning_deleted: XmlElem<boolean | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LearningDocumentView | null>;
};

type LearningDocument = XmlDocument & {
  TopElem: LearningDocumentTopElem;
  learning: LearningDocumentTopElem;
  DocDesc(): string;
};
