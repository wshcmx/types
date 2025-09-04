interface TestLearningDocumentSection {
  id: XmlElem<string | null>;
  /** Раздел */
  title: XmlElem<string | null>;
  /** Балл */
  score: XmlElem<number | null>;
}

type TestLearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
AnnalsObjectsBase &
AnnalsNumsBase &
LearningObjectivesInteractionsBase &
AssessmentScaleValue &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TestLearningDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Название теста */
  assessment_name: XmlElem<string | null>;
  /** Код теста */
  assessment_code: XmlElem<string | null>;
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
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /**
   * Статус
   * @default 0
   */
  state_id: XmlElem<number, typeof common.learning_states>;
  /** Баллы */
  score: XmlElem<number>;
  text_result: XmlElem<string | null>;
  /** Служебная информация */
  core_lesson: XmlElem<string | null>;
  /** Отчет по результатам */
  lesson_report: XmlElem<string | null>;
  /** Дата активации */
  start_usage_date: XmlElem<Date | null>;
  /** Дата начала обучения */
  start_learning_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_usage_date: XmlElem<Date | null>;
  /** Дата планир. завершения */
  max_end_date: XmlElem<Date | null>;
  /** Время модуля */
  time: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  qti_text: XmlElem<string | null>;
  /** Дата генерации QTI */
  qti_date: XmlElem<Date | null>;
  /** Результаты по разделам */
  sections: XmlMultiElem<TestLearningDocumentSection | null>;
  /** Процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  learning_record_id: XmlElem<number | null, LearningRecordCatalogDocumentTopElem>;
  /** Активный тест */
  active_test_learning_id: XmlElem<number | null>;
  active_test_learning_deleted: XmlElem<boolean | null>;
  /** Назначен самостоятельно */
  is_self_enrolled: XmlElem<boolean | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Ссылка на отчет во внешней системе тестирования */
  link_report: XmlElem<string | null>;
};

type TestLearningDocument = XmlDocument & {
  TopElem: TestLearningDocumentTopElem;
  test_learning: TestLearningDocumentTopElem;
  DocDesc(): string;
};
