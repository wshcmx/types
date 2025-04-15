interface LearningTaskResultDocumentFile extends FileBase {
  /**
   * Файл эксперта
   * @default false
   */
  is_expert: XmlElem<boolean>;
}

interface LearningTaskResultDocumentViewDuration {
  /**
   * @temp
   * @default 0
   */
  hour: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  minute: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  second: XmlElem<number | null>;
}

interface LearningTaskResultDocumentView extends DescBase {
  /**
   * @temp
   * Продолжительность выполнения
   */
  duration: XmlElem<LearningTaskResultDocumentViewDuration | null>;
}

type LearningTaskResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LearningTaskResultDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Задание */
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
  /** Название задания */
  learning_task_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Статус
   * @default assign
   */
  status_id: XmlElem<string | null, typeof common.learning_task_status_types>;
  /** Ответ */
  answer: XmlElem<string | null>;
  /** Эксперт */
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Комментарий эксперта */
  expert_comment: XmlElem<string | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Дата назначения */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  /** Продолжительность выполнения */
  duration: XmlElem<number | null>;
  /**
   * Просрочено
   * @default false
   */
  expired: XmlElem<boolean>;
  /** Дата/время начала выполнения */
  start_execution_date: XmlElem<Date | null>;
  /** Дата/время завершения выполнения */
  finish_execution_date: XmlElem<Date | null>;
  files: XmlMultiElem<LearningTaskResultDocumentFile | null>;
  AddFile(fileId: number, resource: ResourceDocument): void;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LearningTaskResultDocumentView | null>;
};

type LearningTaskResultDocument = XmlDocument & {
  TopElem: LearningTaskResultDocumentTopElem;
  learning_task_result: LearningTaskResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
