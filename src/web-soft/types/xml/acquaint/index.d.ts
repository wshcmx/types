interface AcquaintDocumentCollaborator {
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  collaborator_fullname: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /**
   * Ознакомлен
   * @default false
   */
  acquaint: XmlElem<boolean>;
  /**
   * Не создавать ознакомление
   * @default false
   */
  bcreateaa: XmlElem<boolean>;
  /**
   * Только удалить из массива
   * @default false
   */
  bonlydelaa: XmlElem<boolean>;
}

interface AcquaintDocumentAssessment {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface AcquaintDocumentGroup {
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface AcquaintDocumentQuestionCondition {
  /** @default = */
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  /** @default equal */
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string | null>;
}

interface AcquaintDocumentQuestionEntry {
  id: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /**
   * Правильный ответ
   * @default false
   */
  is_correct: XmlElem<boolean | null>;
}

interface AcquaintDocumentQuestion {
  /** Вопрос */
  id: XmlElem<string | null>;
  /** @default false */
  is_custom: XmlElem<boolean | null>;
  /** Вопрос */
  item_id: XmlElem<number | null, ItemCatalogDocumentTopElem>;
  /** Тип вопроса */
  type_id: XmlElem<string | null, typeof common.acquaint_question_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Правильный ответ */
  correct_answer: XmlElem<string | null>;
  conditions: XmlMultiElem<AcquaintDocumentQuestionCondition | null>;
  /** Варианты ответов */
  entries: XmlMultiElem<AcquaintDocumentQuestionEntry | null>;
}

interface AcquaintDocumentView {
  /**
   * @temp
   * @default empty
   */
  tab_select: XmlElem<string>;
}

interface AcquaintDocumentSelectType {
  select_type_id: XmlElem<string | null>;
}

type AcquaintDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: AcquaintDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default document
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Требуемая дата ознакомления */
  normative_date: XmlElem<Date | null>;
  /**
   * Периодичность повторного обновления в днях
   * @default 0
   */
  reacquaintance_period: XmlElem<number>;
  /** Сотрудники */
  collaborators: XmlMultiElem<AcquaintDocumentCollaborator | null>;
  /** Тесты */
  assessments: XmlMultiElem<AcquaintDocumentAssessment | null>;
  /** Группа */
  groups: XmlMultiElem<AcquaintDocumentGroup | null>;
  /** Программный код */
  eval_code: XmlElem<string | null>;
  /**
   * Статус
   * @default true
   */
  status: XmlElem<boolean>;
  /** Вопросы */
  questions: XmlMultiElem<AcquaintDocumentQuestion | null>;
  /** @temp */
  view: XmlElem<AcquaintDocumentView | null>;
  select_types: XmlMultiElem<AcquaintDocumentSelectType | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type AcquaintDocument = XmlDocument & {
  TopElem: AcquaintDocumentTopElem;
  acquaint: AcquaintDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
