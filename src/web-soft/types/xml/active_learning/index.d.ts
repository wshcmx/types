interface ActiveLearningDocumentPart extends LearningPartBase, LearningCurrentStateBase {
  /**
   * Обязательный раздел
   * @default true
   */
  is_mandatory: XmlElem<boolean>;
  /**
   * Коэффициент итоговой оценки
   * @default 1.0
   */
  score_factor: XmlElem<number>;
  dynamic_status: XmlElem<string | null>;
}

interface ActiveLearningDocumentEvent {
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Баллы */
  score: XmlElem<number>;
}

interface ActiveLearningDocumentView {
  /** @temp */
  old_course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** @temp */
  old_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * @temp
   * @default false
   */
  never_saved: XmlElem<boolean>;
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /** @temp */
  course_object: XmlElem<unknown | null>;
  /**
   * @temp
   * @default result
   */
  result_tab_selector: XmlElem<string>;
}

type ActiveLearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveLearningDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Название курса */
  course_name: XmlElem<string | null>;
  /** Код курса */
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
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата начала обучения */
  start_learning_date: XmlElem<Date | null>;
  /**
   * Назначен самостоятельно
   * @default false
   */
  is_self_enrolled: XmlElem<boolean>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /**
   * Количество попыток
   * @default 1
   */
  attempts_num: XmlElem<number>;
  /** Базовый url */
  base_url: XmlElem<string | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Разделы курса */
  parts: XmlMultiElem<ActiveLearningDocumentPart | null>;
  /** Мероприятия */
  events: XmlMultiElem<ActiveLearningDocumentEvent | null>;
  /** Код раздела последнего посещения */
  last_usage_part_code: XmlElem<string | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /**
   * Максимальный балл
   * @default 0
   */
  max_score: XmlElem<number>;
  /**
   * Формула итоговой оценки
   * @default score
   */
  score_sum_eval: XmlElem<string>;
  /** Баллы */
  score: XmlElem<number>;
  /** Баллы */
  calc_score(): number;
  /**
   * Состояние
   * @default 0
   */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Время модулей */
  time: XmlElem<number | null>;
  calc_max_end_date(): Date | null;
  /**
   * Не кодировать данные курса
   * @default false
   */
  no_encoding_core_lesson: XmlElem<boolean | null>;
  /** Логгирование прохождения курса */
  logging: XmlElem<boolean | null>;
  /** Комментирование */
  commenting: XmlElem<boolean | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  /** Тип устройства */
  device_disp_type: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ActiveLearningDocumentView | null>;
  complete_course(): number | undefined;
  update_add_data(): void;
};

type ActiveLearningDocument = XmlDocument & {
  TopElem: ActiveLearningDocumentTopElem;
  active_learning: ActiveLearningDocumentTopElem;
  OnBeforeSave(): void;
  OnLocalInit(): void;
  DocDesc(): string;
};
