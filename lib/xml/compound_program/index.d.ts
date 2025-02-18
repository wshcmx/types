interface CompoundProgramDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramStartAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishNotifiation {
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /**
   * Формат сообщения
   * @default plane
   */
  body_type: XmlElem<string | null>;
  /**
   * Редактировать уведомление
   * @default false
   */
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramStartNotifiation {
  /** Шаблон уведомления */
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /**
   * Формат сообщения
   * @default plane
   */
  body_type: XmlElem<string | null>;
  /**
   * Редактировать уведомление
   * @default false
   */
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface CompoundProgramDocumentProgram extends CostCurrencyTypeBase, CustomElemsBase {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительская учебная программа */
  parent_progpam_id: XmlElem<number | null>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Доступ после завершения разделов */
  start_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramStartLearningTask | null>;
  /** Доступ после завершения разделов */
  start_assessments: XmlMultiElem<CompoundProgramDocumentProgramStartAssessment | null>;
  /** Доступ после завершения разделов */
  finish_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramFinishLearningTask | null>;
  /** Доступ после завершения разделов */
  finish_assessments: XmlMultiElem<CompoundProgramDocumentProgramFinishAssessment | null>;
  /** Пост-рассылка */
  finish_notifiation: XmlElem<CompoundProgramDocumentProgramFinishNotifiation | null>;
  /** Пред-рассылка */
  start_notifiation: XmlElem<CompoundProgramDocumentProgramStartNotifiation | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /**
   * Тип
   * @default education_method
   */
  type: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код */
  object_code: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /**
   * Формат сообщения
   * @default plane
   */
  body_type: XmlElem<string | null>;
  /**
   * Редактировать уведомление
   * @default false
   */
  edit_notification: XmlElem<boolean>;
  /** Дней */
  delay_days: XmlElem<number | null>;
  /** Дней */
  days: XmlElem<number | null>;
  /** Вес, % */
  weight: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  /**
   * Обязательный раздел
   * @default true
   */
  required: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Доступ после завершения разделов */
  completed_parent_programs: XmlMultiElem<CompoundProgramDocumentProgramCompletedParentProgram | null>;
}

interface CompoundProgramDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  filter: XmlElem<AuFtFilter | null>;
}

type CompoundProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
LectorsBase &
FileListBase &
KnowledgePartsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CompoundProgramDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Минимальное количество участников */
  min_person_num: XmlElem<number | null>;
  /**
   * Разрешить самоназначение
   * @default false
   */
  allow_self_assignment: XmlElem<boolean>;
  /** Разделы учебной программы */
  programs: XmlMultiElem<CompoundProgramDocumentProgram | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<CompoundProgramDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  activate_program_to_person(input: unknown): { error: number, errorText: string; result: { id: number, error: number, text: string }[] };
};

type CompoundProgramDocument = XmlDocument & {
  TopElem: CompoundProgramDocumentTopElem;
  compound_program: CompoundProgramDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
