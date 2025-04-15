interface CustomFieldsFieldEntry {
  /** Значение */
  value: XmlElem<string | null>;
}

interface CustomFieldsField {
  /** Название */
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string | null>;
  /** Список допустимых значений */
  entries: XmlMultiElem<CustomFieldsFieldEntry | null>;
  sheet_id: XmlElem<string | null>;
  disp_web: XmlElem<boolean>;
  is_required: XmlElem<boolean>;
  /** Условие верности */
  condition_eval: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  default_value_eval: XmlElem<string | null>;
  /** Длина */
  width: XmlElem<string | null>;
  /** Высота */
  height: XmlElem<string | null>;
  /** Визуальный класс */
  class: XmlElem<string | null>;
  /** Количество символов */
  max_chars: XmlElem<string | null>;
  view: XmlElem<ViewConditionsBase | null>;
}

interface CustomFields {
  fields: XmlMultiElem<CustomFieldsField | null>;
}

interface CustomTemplateBaseSheet extends AdminAccessBase {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface CustomTemplateBase extends CustomFields {
  sheets: XmlMultiElem<CustomTemplateBaseSheet | null>;
  unique_field_name(): unknown;
}

interface CustomTemplatesDocumentRequest {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentRequestTypeItem {
  id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentRequestType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentRequestTypeItem | null>;
}

interface CustomTemplatesDocumentResponse {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentResponseTypeItem {
  id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentResponseType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentResponseTypeItem | null>;
}

interface CustomTemplatesDocumentEventResult {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentEventResultTypeItem {
  id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentEventResultType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentEventResultTypeItem | null>;
}

interface CustomTemplatesDocumentObjectData {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentObjectDataTypeItem {
  id: XmlElem<number | null, ObjectDataTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentObjectDataType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentObjectDataTypeItem | null>;
}

interface CustomTemplatesDocumentSubmission {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentSubmissionTypeItem {
  id: XmlElem<number | null, SubmissionTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentSubmissionType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentSubmissionTypeItem | null>;
}

interface CustomTemplatesDocumentEventAssessmentPlan {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPollResult {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentTaskTypeItem {
  id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentTaskType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentTaskTypeItem | null>;
}

interface CustomTemplatesDocumentKnowledgePart {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentKnowledgePartTypeItem {
  id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentKnowledgePartType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentKnowledgePartTypeItem | null>;
}

interface CustomTemplatesDocumentChatbotChat {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentChatbotItem {
  id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentChatbot {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentChatbotItem | null>;
}

interface CustomTemplatesDocumentGood {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentGoodTypeItem {
  id: XmlElem<number | null, GoodTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentGoodType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentGoodTypeItem | null>;
}

interface CustomTemplatesDocumentWikiArticle {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentWikiArticleTypeItem {
  id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentWikiArticleType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentWikiArticleTypeItem | null>;
}

interface CustomTemplatesDocumentWikiArticleCommunication {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentWikiArticleCommunicationTypeItem {
  id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentWikiArticleCommunicationType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentWikiArticleCommunicationTypeItem | null>;
}

interface CustomTemplatesDocumentConversation {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentConversationTypeItem {
  id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentConversationType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentConversationTypeItem | null>;
}

interface CustomTemplatesDocumentIntervalSchedule {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPresenceStateIntervalScheduleItem {
  id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentPresenceStateIntervalSchedule {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentPresenceStateIntervalScheduleItem | null>;
}

interface CustomTemplatesDocumentPersonnelDocument {
  template_field: XmlElem<string | null>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPersonnelDocumentTypeItem {
  id: XmlElem<number | null, PersonnelDocumentTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentPersonnelDocumentType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentPersonnelDocumentTypeItem | null>;
}

type CustomTemplateCatalogDocumentTopElem = XmlTopElem & {
  collaborator: XmlElem<CustomTemplateBase | null>;
  collaborator_change_log: XmlElem<CustomTemplateBase | null>;
  group: XmlElem<CustomTemplateBase | null>;
  position: XmlElem<CustomTemplateBase | null>;
  position_common: XmlElem<CustomTemplateBase | null>;
  subdivision: XmlElem<CustomTemplateBase | null>;
  subdivision_group: XmlElem<CustomTemplateBase | null>;
  org: XmlElem<CustomTemplateBase | null>;
  staff_position: XmlElem<CustomTemplateBase | null>;
  staff_position_start: XmlElem<CustomTemplateBase | null>;
  staff_position_finish: XmlElem<CustomTemplateBase | null>;
  staff_position_move: XmlElem<CustomTemplateBase | null>;
  qualification: XmlElem<CustomTemplateBase | null>;
  qualification_assignment: XmlElem<CustomTemplateBase | null>;
  position_family: XmlElem<CustomTemplateBase | null>;
  region: XmlElem<CustomTemplateBase | null>;
  salary_survey: XmlElem<CustomTemplateBase | null>;
  payment: XmlElem<CustomTemplateBase | null>;
  benefit_item: XmlElem<CustomTemplateBase | null>;
  resume: XmlElem<CustomTemplateBase | null>;
  career_reserve: XmlElem<CustomTemplateBase | null>;
  career_plan: XmlElem<CustomTemplateBase | null>;
  career_reserve_development_program_task: XmlElem<CustomTemplateBase | null>;
  personnel_reserve: XmlElem<CustomTemplateBase | null>;
  course: XmlElem<CustomTemplateBase | null>;
  active_learning: XmlElem<CustomTemplateBase | null>;
  learning: XmlElem<CustomTemplateBase | null>;
  assessment: XmlElem<CustomTemplateBase | null>;
  active_test_learning: XmlElem<CustomTemplateBase | null>;
  test_learning: XmlElem<CustomTemplateBase | null>;
  item: XmlElem<CustomTemplateBase | null>;
  site: XmlElem<CustomTemplateBase | null>;
  forum: XmlElem<CustomTemplateBase | null>;
  forum_entry: XmlElem<CustomTemplateBase | null>;
  document: XmlElem<CustomTemplateBase | null>;
  blog: XmlElem<CustomTemplateBase | null>;
  blog_entry: XmlElem<CustomTemplateBase | null>;
  blog_entry_comment: XmlElem<CustomTemplateBase | null>;
  subscription: XmlElem<CustomTemplateBase | null>;
  budget: XmlElem<CustomTemplateBase | null>;
  budget_period: XmlElem<CustomTemplateBase | null>;
  cost_center: XmlElem<CustomTemplateBase | null>;
  expense_item: XmlElem<CustomTemplateBase | null>;
  education_org: XmlElem<CustomTemplateBase | null>;
  education_method: XmlElem<CustomTemplateBase | null>;
  compound_program: XmlElem<CustomTemplateBase | null>;
  compound_program_program: XmlElem<CustomTemplateBase | null>;
  event: XmlElem<CustomTemplateBase | null>;
  event_type: XmlElem<CustomTemplateBase | null>;
  lector: XmlElem<CustomTemplateBase | null>;
  traning_order: XmlElem<CustomTemplateBase | null>;
  request: XmlElem<CustomTemplatesDocumentRequest | null>;
  request_type: XmlElem<CustomTemplatesDocumentRequestType | null>;
  response: XmlElem<CustomTemplatesDocumentResponse | null>;
  response_type: XmlElem<CustomTemplatesDocumentResponseType | null>;
  event_result: XmlElem<CustomTemplatesDocumentEventResult | null>;
  event_result_type: XmlElem<CustomTemplatesDocumentEventResultType | null>;
  object_data: XmlElem<CustomTemplatesDocumentObjectData | null>;
  object_data_type: XmlElem<CustomTemplatesDocumentObjectDataType | null>;
  certificate: XmlElem<CustomTemplateBase | null>;
  certificate_type: XmlElem<CustomTemplateBase | null>;
  submission: XmlElem<CustomTemplatesDocumentSubmission | null>;
  submission_type: XmlElem<CustomTemplatesDocumentSubmissionType | null>;
  event_assessment_plan: XmlElem<CustomTemplatesDocumentEventAssessmentPlan | null>;
  doc_type: XmlElem<CustomTemplateBase | null>;
  poll: XmlElem<CustomTemplateBase | null>;
  poll_result: XmlElem<CustomTemplatesDocumentPollResult | null>;
  poll_procedure: XmlElem<CustomTemplateBase | null>;
  poll_question: XmlElem<CustomTemplateBase | null>;
  server_agent: XmlElem<CustomTemplateBase | null>;
  statistic_rec: XmlElem<CustomTemplateBase | null>;
  education_plan: XmlElem<CustomTemplateBase | null>;
  education_plan_program: XmlElem<CustomTemplateBase | null>;
  covenant: XmlElem<CustomTemplateBase | null>;
  contract: XmlElem<CustomTemplateBase | null>;
  exchange_server: XmlElem<CustomTemplateBase | null>;
  assessment_appraise: XmlElem<CustomTemplateBase | null>;
  competence_profile: XmlElem<CustomTemplateBase | null>;
  development_plan: XmlElem<CustomTemplateBase | null>;
  competence: XmlElem<CustomTemplateBase | null>;
  indicator: XmlElem<CustomTemplateBase | null>;
  kpi: XmlElem<CustomTemplateBase | null>;
  kpi_group: XmlElem<CustomTemplateBase | null>;
  kpi_profile: XmlElem<CustomTemplateBase | null>;
  kpi_profile_kpi: XmlElem<CustomTemplateBase | null>;
  kpi_value: XmlElem<CustomTemplateBase | null>;
  kpi_plan: XmlElem<CustomTemplateBase | null>;
  scale: XmlElem<CustomTemplateBase | null>;
  formula: XmlElem<CustomTemplateBase | null>;
  pa: XmlElem<CustomTemplateBase | null>;
  assessment_plan: XmlElem<CustomTemplateBase | null>;
  development_method: XmlElem<CustomTemplateBase | null>;
  assessment_result_recommend: XmlElem<CustomTemplateBase | null>;
  task: XmlElem<CustomTemplateBase | null>;
  task_type: XmlElem<CustomTemplatesDocumentTaskType | null>;
  bonus_profile: XmlElem<CustomTemplateBase | null>;
  bonus_item: XmlElem<CustomTemplateBase | null>;
  knowledge_part: XmlElem<CustomTemplatesDocumentKnowledgePart | null>;
  knowledge_part_type: XmlElem<CustomTemplatesDocumentKnowledgePartType | null>;
  chatbot_chat: XmlElem<CustomTemplatesDocumentChatbotChat | null>;
  chatbot: XmlElem<CustomTemplatesDocumentChatbot | null>;
  knowledge_classifier: XmlElem<CustomTemplateBase | null>;
  expert: XmlElem<CustomTemplateBase | null>;
  expert_question: XmlElem<CustomTemplateBase | null>;
  book: XmlElem<CustomTemplateBase | null>;
  article: XmlElem<CustomTemplateBase | null>;
  library_material: XmlElem<CustomTemplateBase | null>;
  library_section: XmlElem<CustomTemplateBase | null>;
  resource: XmlElem<CustomTemplateBase | null>;
  position_assessment_form: XmlElem<CustomTemplateBase | null>;
  dn_student: XmlElem<CustomTemplateBase | null>;
  dn_stud_group: XmlElem<CustomTemplateBase | null>;
  dn_stream: XmlElem<CustomTemplateBase | null>;
  dn_work_curriculum: XmlElem<CustomTemplateBase | null>;
  dn_schedule: XmlElem<CustomTemplateBase | null>;
  dn_lesson: XmlElem<CustomTemplateBase | null>;
  dn_control_event: XmlElem<CustomTemplateBase | null>;
  dn_register: XmlElem<CustomTemplateBase | null>;
  dn_academ_debt: XmlElem<CustomTemplateBase | null>;
  dn_discipline: XmlElem<CustomTemplateBase | null>;
  dn_block_discipline: XmlElem<CustomTemplateBase | null>;
  dn_program_discipl: XmlElem<CustomTemplateBase | null>;
  dn_train_method_complex: XmlElem<CustomTemplateBase | null>;
  transaction: XmlElem<CustomTemplateBase | null>;
  vacancy: XmlElem<CustomTemplateBase | null>;
  vacancy_response: XmlElem<CustomTemplateBase | null>;
  recruitment_plan: XmlElem<CustomTemplateBase | null>;
  recommendation: XmlElem<CustomTemplateBase | null>;
  tutor: XmlElem<CustomTemplateBase | null>;
  exclusion_reason: XmlElem<CustomTemplateBase | null>;
  talent_pool_nomination: XmlElem<CustomTemplateBase | null>;
  development_potential: XmlElem<CustomTemplateBase | null>;
  efficiency_estimation: XmlElem<CustomTemplateBase | null>;
  risk_perspective: XmlElem<CustomTemplateBase | null>;
  risk_level: XmlElem<CustomTemplateBase | null>;
  key_position_threat: XmlElem<CustomTemplateBase | null>;
  key_position: XmlElem<CustomTemplateBase | null>;
  readiness_level: XmlElem<CustomTemplateBase | null>;
  successor: XmlElem<CustomTemplateBase | null>;
  digital_signature: XmlElem<CustomTemplateBase | null>;
  project: XmlElem<CustomTemplateBase | null>;
  project_participant: XmlElem<CustomTemplateBase | null>;
  good: XmlElem<CustomTemplatesDocumentGood | null>;
  good_type: XmlElem<CustomTemplatesDocumentGoodType | null>;
  typical_development_program: XmlElem<CustomTemplateBase | null>;
  typical_development_program_task: XmlElem<CustomTemplateBase | null>;
  outstaff_provider: XmlElem<CustomTemplateBase | null>;
  outstaff_contract: XmlElem<CustomTemplateBase | null>;
  outstaff_order: XmlElem<CustomTemplateBase | null>;
  outstaff_order_execution: XmlElem<CustomTemplateBase | null>;
  outstaff_order_execution_stage: XmlElem<CustomTemplateBase | null>;
  candidate_status_type: XmlElem<CustomTemplateBase | null>;
  selected_resume: XmlElem<CustomTemplateBase | null>;
  vacancy_source: XmlElem<CustomTemplateBase | null>;
  work_schedule: XmlElem<CustomTemplateBase | null>;
  estaff_event: XmlElem<CustomTemplateBase | null>;
  professional_area: XmlElem<CustomTemplateBase | null>;
  personnel_committee: XmlElem<CustomTemplateBase | null>;
  committee_member: XmlElem<CustomTemplateBase | null>;
  provider: XmlElem<CustomTemplateBase | null>;
  sale_contract: XmlElem<CustomTemplateBase | null>;
  pay_stage: XmlElem<CustomTemplateBase | null>;
  sale: XmlElem<CustomTemplateBase | null>;
  sale_status: XmlElem<CustomTemplateBase | null>;
  messenger_service: XmlElem<CustomTemplateBase | null>;
  cl_course: XmlElem<CustomTemplateBase | null>;
  notification: XmlElem<CustomTemplateBase | null>;
  notification_template: XmlElem<CustomTemplateBase | null>;
  order: XmlElem<CustomTemplateBase | null>;
  learning_task: XmlElem<CustomTemplateBase | null>;
  learning_task_result: XmlElem<CustomTemplateBase | null>;
  reprimand: XmlElem<CustomTemplateBase | null>;
  wiki_base: XmlElem<CustomTemplateBase | null>;
  wiki_article: XmlElem<CustomTemplatesDocumentWikiArticle | null>;
  wiki_article_type: XmlElem<CustomTemplatesDocumentWikiArticleType | null>;
  wiki_article_communication: XmlElem<CustomTemplatesDocumentWikiArticleCommunication | null>;
  wiki_article_communication_type: XmlElem<CustomTemplatesDocumentWikiArticleCommunicationType | null>;
  conversation: XmlElem<CustomTemplatesDocumentConversation | null>;
  conversation_type: XmlElem<CustomTemplatesDocumentConversationType | null>;
  component_package: XmlElem<CustomTemplateBase | null>;
  presence_state: XmlElem<CustomTemplateBase | null>;
  schedule_day: XmlElem<CustomTemplateBase | null>;
  collaborator_schedule: XmlElem<CustomTemplateBase | null>;
  mobile_app_config: XmlElem<CustomTemplateBase | null>;
  contest: XmlElem<CustomTemplateBase | null>;
  place: XmlElem<CustomTemplateBase | null>;
  substitution_type: XmlElem<CustomTemplateBase | null>;
  substitution: XmlElem<CustomTemplateBase | null>;
  object_link: XmlElem<CustomTemplateBase | null>;
  recommender_algorithm_applying: XmlElem<CustomTemplateBase | null>;
  recommender_select_collaborator: XmlElem<CustomTemplateBase | null>;
  user_recommendation: XmlElem<CustomTemplateBase | null>;
  repositorium: XmlElem<CustomTemplateBase | null>;
  object_resource: XmlElem<CustomTemplateBase | null>;
  training_plan: XmlElem<CustomTemplateBase | null>;
  interval_schedule: XmlElem<CustomTemplatesDocumentIntervalSchedule | null>;
  presence_state_interval_schedule: XmlElem<CustomTemplatesDocumentPresenceStateIntervalSchedule | null>;
  profession: XmlElem<CustomTemplateBase | null>;
  profession_category: XmlElem<CustomTemplateBase | null>;
  personnel_document: XmlElem<CustomTemplatesDocumentPersonnelDocument | null>;
  personnel_document_type: XmlElem<CustomTemplatesDocumentPersonnelDocumentType | null>;
  estaff_event_type: XmlElem<CustomTemplateBase | null>;
  license: XmlElem<CustomTemplateBase | null>;
};
