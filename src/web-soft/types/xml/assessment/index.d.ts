interface AssessmentDocumentSectionSelectionOrderingPoint {
  /** Вес */
  point_num: XmlElem<number | null>;
  /** Количество */
  item_num: XmlElem<number | null>;
  item_sum_num(): number;
}

interface AssessmentDocumentSectionSelectionOrdering {
  order: XmlElem<string, typeof common.order_types>;
  select_id: XmlElem<string | null>;
  select_num: XmlElem<number | null>;
  /** Веса */
  points: XmlMultiElem<AssessmentDocumentSectionSelectionOrderingPoint | null>;
}

interface AssessmentDocumentSectionItemScale {
  scale_id: XmlElem<string | null>;
}

interface AssessmentDocumentSectionItem {
  id: XmlElem<number | null>;
  title: XmlElem<string | null>;
  scales: XmlMultiElem<AssessmentDocumentSectionItemScale | null>;
}

interface AssessmentDocumentSectionRole {
  id: XmlElem<number | null>;
}

interface AssessmentDocumentSection {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  title: XmlElem<string | null>;
  duration: XmlElem<number | null>;
  passing_score: XmlElem<number | null>;
  display_correct_answer: XmlElem<boolean>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  feedback_wrong: XmlElem<string | null>;
  feedback_correct: XmlElem<string | null>;
  rubric: XmlElem<RubricBase | null>;
  objectives: XmlElem<ObjectivesBase | null>;
  selection_ordering: XmlElem<AssessmentDocumentSectionSelectionOrdering | null>;
  items: XmlMultiElem<AssessmentDocumentSectionItem | null>;
  comment: XmlElem<string | null>;
  roles: XmlMultiElem<AssessmentDocumentSectionRole | null>;
}

interface AssessmentDocumentPlayer {
  type: XmlElem<string, typeof common.player_types>;
  fit_screen: XmlElem<boolean>;
  position: XmlElem<string, typeof common.player_positions>;
  language: XmlElem<string, typeof common.player_languages>;
  send_type: XmlElem<string, typeof common.player_send_types>;
  send_timer: XmlElem<number>;
  display_type: XmlElem<string, typeof common.player_display_types>;
  rubric_display_type: XmlElem<string, typeof common.player_rubric_display_types>;
  display_map: XmlElem<boolean>;
  navigate_map: XmlElem<boolean>;
  strict_navigation: XmlElem<boolean>;
  navigate_progress: XmlElem<boolean>;
  strict_timing: XmlElem<boolean>;
  accept_next: XmlElem<boolean>;
  lock_result: XmlElem<boolean>;
  connection_break: XmlElem<boolean>;
  url_params: XmlElem<string | null>;
  display_res_score: XmlElem<boolean>;
}

interface AssessmentDocumentScale {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type AssessmentDocumentTopElem = XmlTopElem &
ProctoringBase &
CatalogListBase &
CourseExpertsBase &
FileListBase &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
EstimationLevelsBase &
ClLocalizationsBase &
AdminAccessBase & {
  Doc: AssessmentDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  title: XmlElem<string | null>;
  name(): string;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  /** Система тестирования */
  testing_system_id: XmlElem<number | null, TestingSystemCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  duration_days: XmlElem<number | null>;
  attempts_num: XmlElem<number>;
  /** Проходной балл */
  passing_score: XmlElem<number | null>;
  use_scale_calculation: XmlElem<boolean>;
  test_finish_redirect: XmlElem<string>;
  test_finish_redirect_url: XmlElem<string | null>;
  activation_code: XmlElem<string | null>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  not_display_unfinished_score: XmlElem<boolean>;
  feedback_wrong: XmlElem<string | null>;
  feedback_correct: XmlElem<string | null>;
  feedback_passed: XmlElem<string | null>;
  feedback_failed: XmlElem<string | null>;
  use_launch_code: XmlElem<boolean>;
  /** Не показывать набранный балл для незавершенных тестов */
  not_sent_correct_answer: XmlElem<boolean>;
  rubric: XmlElem<RubricBase | null>;
  objectives: XmlElem<ObjectivesBase | null>;
  sections: XmlMultiElem<AssessmentDocumentSection | null>;
  /** Тип сертификата */
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  display_result: XmlElem<boolean>;
  is_adaptive_test: XmlElem<boolean>;
  display_correct_answer: XmlElem<boolean>;
  display_result_report: XmlElem<boolean>;
  /** Открытый тест (возможно самостоятельно назначить тест) */
  is_open: XmlElem<boolean>;
  display_correct_answer_in_report: XmlElem<boolean>;
  display_answers_in_report: XmlElem<boolean>;
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
  external_type: XmlElem<string | null, typeof common.assessment_external_types>;
  /** Не отправлять стандартные уведомления о назначении */
  not_use_default_notification: XmlElem<boolean | null>;
  view_templates: XmlElem<MsViewTemplatesBase | null>;
  comment: XmlElem<string | null>;
  /** Расписание прохождения */
  schedule: XmlElem<MsWeekScheduleBase | null>;
  access: XmlElem<AccessDocBase | null>;
  publish_url: XmlElem<string | null>;
  publish_date: XmlElem<Date | null>;
  template_url: XmlElem<string | null>;
  win_width: XmlElem<string>;
  win_height: XmlElem<string>;
  player: XmlElem<AssessmentDocumentPlayer | null>;
  scales: XmlMultiElem<AssessmentDocumentScale | null>;
  before_finish_eval: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_info(): null | Object;
  update_structure(): boolean;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type AssessmentDocument = XmlDocument & {
  TopElem: AssessmentDocumentTopElem;
  assessment: AssessmentDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
