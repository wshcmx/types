interface CommonOrderType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonItemType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonGradingOptionType {
  id: XmlElem<string | null>;
  option_id: XmlElem<string | null>;
  qti_tag: XmlElem<string | null>;
}

interface CommonSentenceOptionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPlayerType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  archive_name: XmlElem<string | null>;
}

interface CommonPlayerPosition {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPlayerLanguage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPlayerSendType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPlayerDisplayType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPlayerRubricDisplayType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLearningState {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  short_descriptor: XmlElem<string | null>;
  long_descriptor: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  lpe_color: XmlElem<string | null>;
}

interface CommonEducationLearningState {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  short_descriptor: XmlElem<string | null>;
  long_descriptor: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
}

interface CommonViewingState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonAvailabilityState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonAcquaintState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonAcquaintQuestionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  multiple: XmlElem<boolean | null>;
}

interface CommonObjectResourceState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonMaterialFormatType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonForumSmileType {
  id: XmlElem<string | null>;
  url: XmlElem<string | null>;
}

interface CommonAnnalsItemType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  data_id: XmlElem<string | null>;
  item_id: XmlElem<string | null>;
}

interface CommonPassportType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonUploadType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonExchangeObjectType {
  name: XmlElem<string | null>;
  disp_name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  web_title: XmlElem<string | null>;
  web_template: XmlElem<string | null>;
  web_const: XmlElem<string | null>;
  /** @default false */
  is_hier: XmlElem<boolean | null>;
  /** @default false */
  is_custom: XmlElem<boolean | null>;
  form_url: XmlElem<string | null>;
  /** @default 0 */
  form_type: XmlElem<number>;
  max_records_num: XmlElem<number | null>;
  /** @default true */
  ft_index: XmlElem<boolean>;
}

interface CommonAnnalsState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAllOptionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  caption: XmlElem<string | null>;
}

interface CommonActionReportType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonActionStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPackageType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPositionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  mod_name: XmlElem<string | null>;
}

interface CommonRequestStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default write */
  bk_color: XmlElem<string | null>;
}

interface CommonResponseStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonClObjectGroup {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAccountStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default write */
  bk_color: XmlElem<string | null>;
}

interface CommonBlockMessageState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProjectStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonPersonnelCommitteeStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonCommitteeMemberType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCommitteeMemberStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEventStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonEventResultStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonEventType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default false */
  is_std: XmlElem<boolean>;
}

interface CommonLearningTaskStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEventFileVisibilityType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPackageStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonContactStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonFieldNameType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonFieldType {
  name: XmlElem<string | null>;
}

interface CommonResultFieldType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonSpxmlType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLectorType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEducationMethodType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTemplateFieldType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  field_type: XmlElem<string | null>;
  icon: XmlElem<string | null>;
  has_entries: XmlElem<boolean | null>;
}

interface CommonServerAgentType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTriggerType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonRecipientType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default false */
  func_man: XmlElem<boolean>;
}

interface CommonCostType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  short_name: XmlElem<string | null>;
}

interface CommonWebFilterType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPollType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  multiple: XmlElem<boolean | null>;
  /** @default false */
  is_table: XmlElem<boolean | null>;
}

interface CommonWebTemplateType extends WebVariablesBase {
  id: XmlElem<string | null>;
  code(): string;
  name: XmlElem<string | null>;
  url: XmlElem<string | null>;
  mode: XmlElem<string | null>;
}

interface CommonDischargeType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_import: XmlElem<boolean | null>;
  source_name: XmlElem<string | null>;
}

interface CommonDischargeDbType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLinkingView {
  name: XmlElem<string | null>;
  catalog_name: XmlElem<string | null>;
  disp_name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  view_url: XmlElem<string | null>;
}

interface CommonWorkflowOperationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonObjectflowConditionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_primary: XmlElem<boolean | null>;
}

interface CommonObjectflowOperationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTestProjectType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonItemStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonCareerReserveStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonKeyPositionStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonSuccessorStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonTutorStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonPersonnelReserveStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonPersonnelReserveTaskStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonPrintFormType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  content_type: XmlElem<string | null>;
  extension: XmlElem<string | null>;
}

interface CommonInteractionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonObjectiveStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  short_descriptor: XmlElem<string | null>;
}

interface CommonObjectiveSuccessStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  short_descriptor: XmlElem<string | null>;
}

interface CommonWeekDayType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  short_name: XmlElem<string | null>;
  index: XmlElem<number | null>;
}

interface CommonContestType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
}

interface CommonContestState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonContestWebTemplate {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLibrarySectionWebTemplate {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLibraryState {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonCourseTestState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonKpiType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonKpiState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonKpiCalcType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAssessmentAppraiseParticipant {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  index: XmlElem<number | null>;
  /** @default true */
  usable: XmlElem<boolean | null>;
}

interface CommonAssessmentAppraiseType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  general: XmlElem<boolean | null>;
  index: XmlElem<number | null>;
}

interface CommonAssessmentAppraiseParameterStatus {
  status_id: XmlElem<string | null>;
}

interface CommonAssessmentAppraiseParameter {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  statuses: XmlMultiElem<CommonAssessmentAppraiseParameterStatus | null>;
}

interface CommonAssessmentAppraiseRecommendType {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonAssessmentAppraiseStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonIndicatorType {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonSupplementaryQuestionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonChartChartSubtype {
  chart_subtype_id: XmlElem<string | null>;
}

interface CommonChart {
  chart_id: XmlElem<string | null>;
  chart_type: XmlElem<string | null>;
  chart_subtypes: XmlMultiElem<CommonChartChartSubtype | null>;
  chart_name: XmlElem<string | null>;
  icon: XmlElem<string | null>;
  /** @default white */
  xcolor: XmlElem<string | null>;
  /** @default white */
  xcolor2: XmlElem<string | null>;
  /** @default 0 */
  xoverlap: XmlElem<number | null>;
  /** @default yellow,lime,white,red,blue,purple,orange,green,silver,aqua,maroon */
  xcolor_line: XmlElem<string | null>;
  /** @default true */
  flag_show_axis: XmlElem<boolean | null>;
  /** @default 0 */
  thickness: XmlElem<number>;
  /** @default false */
  flag_color_datapoints: XmlElem<boolean | null>;
  /** @default true */
  flag_right_angle_axes: XmlElem<boolean | null>;
  /** @default true */
  flag_foreign_caption: XmlElem<boolean | null>;
  /** @default false */
  flag_show_percent: XmlElem<boolean | null>;
}

interface CommonAssessmentExternalType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAssessmentStageAccess {
  /** @default false */
  allow_add: XmlElem<boolean | null>;
  /** @default false */
  allow_delete: XmlElem<boolean | null>;
  /** @default false */
  allow_plan_modify: XmlElem<boolean | null>;
  /** @default false */
  allow_mark_modify: XmlElem<boolean | null>;
}

interface CommonAssessmentStage {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  /** @default false */
  is_period_dependent: XmlElem<boolean | null>;
  access: XmlElem<CommonAssessmentStageAccess | null>;
}

interface CommonKnowledgePartsObject {
  knowledge_parts_object_id: XmlElem<string | null, typeof common.exchange_object_types>;
  form_url: XmlElem<string | null>;
  /** @default true */
  is_functional: XmlElem<boolean | null>;
}

interface CommonLanguage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLanguageLevel {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonEduType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonExpendedEducType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEmploymentKind {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProfessionalArea {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCareerReserveTasksType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCareerReserveMaterialType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCareerReserveTypeTasksType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTraningOrderState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonApplicationState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonServerRunMode {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPossibleStorage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonOracleDbType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonServerSetting {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  user_name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  passive_in_modes: XmlElem<string | null>;
  default_value: XmlElem<string | null>;
}

interface CommonSystemEventOperationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonForumPersonInfoType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonParticipantState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPeriodity {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  weight: XmlElem<number | null>;
}

interface CommonSubmissionState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCollectState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonNodeType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonResourceType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  ext: XmlElem<string | null>;
  is_media: XmlElem<boolean | null>;
  use_cache: XmlElem<boolean | null>;
}

interface CommonQualificationAssignmentState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonContentItem {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  html_page: XmlElem<string | null>;
  access_block: XmlElem<string | null, typeof common.access_block_types>;
}

interface CommonCovenantStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCourseExpertType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonActiveNotificationStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonClAuthorType {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonClState {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonClApprovalState {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonOperationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default 0 */
  type: XmlElem<number>;
  operation_catalog: XmlElem<string | null>;
}

interface CommonCwtType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonOutType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonXamlInterpreter {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  url: XmlElem<string | null>;
}

interface CommonPeriodCalcType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonExpertEvalType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonVendorStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonVacancyResponseStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonJoinModeType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEvalType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTemplateCacheType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonBudgetStateType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonRecruitmentPlanStateType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStatusInKnowledgeMapType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStudType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStudentState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStudDocType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStudGroupState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWorkType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLessonState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStudWorkState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWeekDay {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonPeriodicityType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonRegistrType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAcademDebtState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProgDisciplState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCurriculumType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTypeMark {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonSocialAvatarPriorityType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAzureRoleSizeType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEncodingType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPortalType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonGraphType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAggregationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonDeliveryType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonGoodInstanceStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonOrderStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonOutstaffContractType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEstaffEventStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonAccessObjectType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEmploymentType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCourseDynamicsCategoryType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTestDynamicsCategoryType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLearningStatisticsCategoryType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default dist,test, */
  type: XmlElem<string>;
}

interface CommonTestStatisticsCategoryType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCoursePartType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  ico_url: XmlElem<string | null>;
}

interface CommonPositionAssignmentType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonDayType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonMonth {
  id: XmlElem<string | null>;
  number: XmlElem<number | null>;
  name: XmlElem<string | null>;
  name_genitive: XmlElem<string | null>;
  days: XmlElem<number | null>;
  quarter: XmlElem<number | null>;
}

interface CommonPollItemType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCareerTransitionDirectionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonOutstaffOrderExecutionStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonKeyboardType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonServiceProviderType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  with_date: XmlElem<boolean | null>;
}

interface CommonPaymentType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_can_received: XmlElem<boolean | null>;
}

interface CommonQualificationStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEducationMethodState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLearningCatalog {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonVclassLearningCatalog {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonDocumentSentType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProctoringObject {
  id: XmlElem<string | null>;
  icon_url: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLearningRecordStatus {
  id: XmlElem<string | null>;
  icon_url: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCourseImportType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTimezone {
  id: XmlElem<number | null>;
  direction: XmlElem<number | null>;
  tm: XmlElem<number | null>;
  name: XmlElem<string | null>;
}

interface CommonSubstitutionStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWikiCommunicationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAgreementStatusType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConversationParticipantState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonMessageState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConversationFormat {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConversationVisibleType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAcquaintType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonMessageType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonChatbotOutType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCheckScheduleType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProgressType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonDesignVscodeSaveType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonDesignVscodeAccessType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonViolationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  icon_url: XmlElem<string | null>;
}

interface CommonViolationState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProctorState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProctoringSessionState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProhibitionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConversationMessageState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonApplicationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaFixtureType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestResultCompletionState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestResultState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestAssertType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonQaTestAssertTemplateType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonBlogType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWorkingConditionState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTariffRateType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConversationObjectType {
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** @default true */
  is_fix_participants: XmlElem<boolean | null>;
  /** @default false */
  exclude_channel_participant: XmlElem<boolean | null>;
}

interface CommonKnowledgeAcquaintState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonKnowledgeAcquaintType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConfirmationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAcquaintConfirmationType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonConfirmationExpertType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWillingnessTravelType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonStatementComponentProperty {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonSignatureType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPersonnelDocumentState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonLayerType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonJobTransferType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPositionCommonStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTypicalDevelopmentProgramStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonFilterType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonGoodState {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWebPersonStateType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWebsoftApp {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonUsageObjectType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonPerfomConditionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEvalCodeType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEvalTextType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonMaterialLocation {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonReactionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonCreateTaskType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonEditTaskType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonViewTaskType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonTaskStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  text_color: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface CommonChatbotTileType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonChatbotActionType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonChatbotButtonType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWorkspaceTheme {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonVideoFormat {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
}

interface CommonSchedulerType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWeekType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonProcessingMethod {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonBenefitStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonBenefitItemStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonObjectParamBaseObjectType {
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface CommonWikiBaseType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonWikiBaseStatus {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface CommonAiModelType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ICommon {
  order_types: XmlMultiElem<CommonOrderType>;
  item_types: XmlMultiElem<CommonItemType>;
  grading_option_types: XmlMultiElem<CommonGradingOptionType>;
  sentence_option_types: XmlMultiElem<CommonSentenceOptionType>;
  player_types: XmlMultiElem<CommonPlayerType>;
  player_positions: XmlMultiElem<CommonPlayerPosition>;
  player_languages: XmlMultiElem<CommonPlayerLanguage>;
  player_send_types: XmlMultiElem<CommonPlayerSendType>;
  player_display_types: XmlMultiElem<CommonPlayerDisplayType>;
  player_rubric_display_types: XmlMultiElem<CommonPlayerRubricDisplayType>;
  learning_states: XmlMultiElem<CommonLearningState>;
  education_learning_states: XmlMultiElem<CommonEducationLearningState>;
  viewing_states: XmlMultiElem<CommonViewingState>;
  availability_states: XmlMultiElem<CommonAvailabilityState>;
  acquaint_states: XmlMultiElem<CommonAcquaintState>;
  acquaint_question_types: XmlMultiElem<CommonAcquaintQuestionType>;
  object_resource_states: XmlMultiElem<CommonObjectResourceState>;
  material_format_types: XmlMultiElem<CommonMaterialFormatType>;
  forum_smile_types: XmlMultiElem<CommonForumSmileType>;
  annals_item_types: XmlMultiElem<CommonAnnalsItemType>;
  passport_types: XmlMultiElem<CommonPassportType>;
  upload_types: XmlMultiElem<CommonUploadType>;
  exchange_object_types: XmlMultiElem<CommonExchangeObjectType>;
  annals_states: XmlMultiElem<CommonAnnalsState>;
  all_option_types: XmlMultiElem<CommonAllOptionType>;
  action_report_types: XmlMultiElem<CommonActionReportType>;
  action_status_types: XmlMultiElem<CommonActionStatusType>;
  package_types: XmlMultiElem<CommonPackageType>;
  position_types: XmlMultiElem<CommonPositionType>;
  request_status_types: XmlMultiElem<CommonRequestStatusType>;
  response_status_types: XmlMultiElem<CommonResponseStatusType>;
  cl_object_groups: XmlMultiElem<CommonClObjectGroup>;
  account_status_types: XmlMultiElem<CommonAccountStatusType>;
  block_message_states: XmlMultiElem<CommonBlockMessageState>;
  project_status_types: XmlMultiElem<CommonProjectStatusType>;
  personnel_committee_status_types: XmlMultiElem<CommonPersonnelCommitteeStatusType>;
  committee_member_types: XmlMultiElem<CommonCommitteeMemberType>;
  committee_member_status_types: XmlMultiElem<CommonCommitteeMemberStatusType>;
  event_status_types: XmlMultiElem<CommonEventStatusType>;
  event_result_status_types: XmlMultiElem<CommonEventResultStatusType>;
  event_types: XmlMultiElem<CommonEventType>;
  learning_task_status_types: XmlMultiElem<CommonLearningTaskStatusType>;
  event_file_visibility_types: XmlMultiElem<CommonEventFileVisibilityType>;
  package_status_types: XmlMultiElem<CommonPackageStatusType>;
  contact_status_types: XmlMultiElem<CommonContactStatusType>;
  field_name_types: XmlMultiElem<CommonFieldNameType>;
  field_types: XmlMultiElem<CommonFieldType>;
  result_field_types: XmlMultiElem<CommonResultFieldType>;
  spxml_types: XmlMultiElem<CommonSpxmlType>;
  lector_types: XmlMultiElem<CommonLectorType>;
  education_method_types: XmlMultiElem<CommonEducationMethodType>;
  template_field_types: XmlMultiElem<CommonTemplateFieldType>;
  server_agent_types: XmlMultiElem<CommonServerAgentType>;
  trigger_types: XmlMultiElem<CommonTriggerType>;
  access_block_types: XmlMultiElem<AccessBlockBase>;
  recipient_types: XmlMultiElem<CommonRecipientType>;
  cost_types: XmlMultiElem<CommonCostType>;
  web_filter_types: XmlMultiElem<CommonWebFilterType>;
  poll_types: XmlMultiElem<CommonPollType>;
  web_template_types: XmlMultiElem<CommonWebTemplateType>;
  discharge_types: XmlMultiElem<CommonDischargeType>;
  discharge_db_types: XmlMultiElem<CommonDischargeDbType>;
  linking_views: XmlMultiElem<CommonLinkingView>;
  workflow_operation_types: XmlMultiElem<CommonWorkflowOperationType>;
  objectflow_condition_types: XmlMultiElem<CommonObjectflowConditionType>;
  objectflow_operation_types: XmlMultiElem<CommonObjectflowOperationType>;
  test_project_types: XmlMultiElem<CommonTestProjectType>;
  item_status_types: XmlMultiElem<CommonItemStatusType>;
  career_reserve_status_types: XmlMultiElem<CommonCareerReserveStatusType>;
  key_position_status_types: XmlMultiElem<CommonKeyPositionStatusType>;
  successor_status_types: XmlMultiElem<CommonSuccessorStatusType>;
  tutor_status_types: XmlMultiElem<CommonTutorStatusType>;
  personnel_reserve_status_types: XmlMultiElem<CommonPersonnelReserveStatusType>;
  personnel_reserve_task_status_types: XmlMultiElem<CommonPersonnelReserveTaskStatusType>;
  print_form_types: XmlMultiElem<CommonPrintFormType>;
  interaction_types: XmlMultiElem<CommonInteractionType>;
  objective_status_types: XmlMultiElem<CommonObjectiveStatusType>;
  objective_success_status_types: XmlMultiElem<CommonObjectiveSuccessStatusType>;
  week_day_types: XmlMultiElem<CommonWeekDayType>;
  contest_types: XmlMultiElem<CommonContestType>;
  contest_states: XmlMultiElem<CommonContestState>;
  contest_web_templates: XmlMultiElem<CommonContestWebTemplate>;
  library_section_web_templates: XmlMultiElem<CommonLibrarySectionWebTemplate>;
  library_states: XmlMultiElem<CommonLibraryState>;
  course_test_states: XmlMultiElem<CommonCourseTestState>;
  kpi_types: XmlMultiElem<CommonKpiType>;
  kpi_states: XmlMultiElem<CommonKpiState>;
  kpi_calc_types: XmlMultiElem<CommonKpiCalcType>;
  assessment_appraise_participants: XmlMultiElem<CommonAssessmentAppraiseParticipant>;
  assessment_appraise_types: XmlMultiElem<CommonAssessmentAppraiseType>;
  assessment_appraise_parameters: XmlMultiElem<CommonAssessmentAppraiseParameter>;
  assessment_appraise_recommend_types: XmlMultiElem<CommonAssessmentAppraiseRecommendType>;
  assessment_appraise_statuses: XmlMultiElem<CommonAssessmentAppraiseStatus>;
  indicator_types: XmlMultiElem<CommonIndicatorType>;
  supplementary_question_types: XmlMultiElem<CommonSupplementaryQuestionType>;
  charts: XmlMultiElem<CommonChart>;
  assessment_external_types: XmlMultiElem<CommonAssessmentExternalType>;
  assessment_stages: XmlMultiElem<CommonAssessmentStage>;
  knowledge_parts_objects: XmlMultiElem<CommonKnowledgePartsObject>;
  languages: XmlMultiElem<CommonLanguage>;
  language_levels: XmlMultiElem<CommonLanguageLevel>;
  educ_types: XmlMultiElem<CommonEduType>;
  expended_educ_types: XmlMultiElem<CommonExpendedEducType>;
  employment_kinds: XmlMultiElem<CommonEmploymentKind>;
  professional_areas: XmlMultiElem<CommonProfessionalArea>;
  career_reserve_tasks_types: XmlMultiElem<CommonCareerReserveTasksType>;
  career_reserve_material_types: XmlMultiElem<CommonCareerReserveMaterialType>;
  career_reserve_type_tasks_types: XmlMultiElem<CommonCareerReserveTypeTasksType>;
  traning_order_states: XmlMultiElem<CommonTraningOrderState>;
  application_states: XmlMultiElem<CommonApplicationState>;
  server_run_modes: XmlMultiElem<CommonServerRunMode>;
  possible_storages: XmlMultiElem<CommonPossibleStorage>;
  oracle_db_types: XmlMultiElem<CommonOracleDbType>;
  server_settings: XmlMultiElem<CommonServerSetting>;
  system_event_operation_types: XmlMultiElem<CommonSystemEventOperationType>;
  forum_person_info_types: XmlMultiElem<CommonForumPersonInfoType>;
  participant_states: XmlMultiElem<CommonParticipantState>;
  perioditys: XmlMultiElem<CommonPeriodity>;
  submission_states: XmlMultiElem<CommonSubmissionState>;
  collect_states: XmlMultiElem<CommonCollectState>;
  node_types: XmlMultiElem<CommonNodeType>;
  resource_types: XmlMultiElem<CommonResourceType>;
  qualification_assignment_states: XmlMultiElem<CommonQualificationAssignmentState>;
  content_items: XmlMultiElem<CommonContentItem>;
  covenant_status_types: XmlMultiElem<CommonCovenantStatusType>;
  course_expert_types: XmlMultiElem<CommonCourseExpertType>;
  active_notification_status_types: XmlMultiElem<CommonActiveNotificationStatusType>;
  cl_author_types: XmlMultiElem<CommonClAuthorType>;
  cl_states: XmlMultiElem<CommonClState>;
  cl_approval_states: XmlMultiElem<CommonClApprovalState>;
  operation_types: XmlMultiElem<CommonOperationType>;
  cwt_types: XmlMultiElem<CommonCwtType>;
  out_types: XmlMultiElem<CommonOutType>;
  xaml_interpreters: XmlMultiElem<CommonXamlInterpreter>;
  period_calc_types: XmlMultiElem<CommonPeriodCalcType>;
  expert_eval_types: XmlMultiElem<CommonExpertEvalType>;
  vendor_status_types: XmlMultiElem<CommonVendorStatusType>;
  vacancy_response_status_types: XmlMultiElem<CommonVacancyResponseStatusType>;
  join_mode_types: XmlMultiElem<CommonJoinModeType>;
  eval_types: XmlMultiElem<CommonEvalType>;
  template_cache_types: XmlMultiElem<CommonTemplateCacheType>;
  budget_state_types: XmlMultiElem<CommonBudgetStateType>;
  recruitment_plan_state_types: XmlMultiElem<CommonRecruitmentPlanStateType>;
  status_in_knowledge_map_types: XmlMultiElem<CommonStatusInKnowledgeMapType>;
  stud_types: XmlMultiElem<CommonStudType>;
  student_states: XmlMultiElem<CommonStudentState>;
  stud_doc_types: XmlMultiElem<CommonStudDocType>;
  stud_group_states: XmlMultiElem<CommonStudGroupState>;
  work_types: XmlMultiElem<CommonWorkType>;
  lesson_states: XmlMultiElem<CommonLessonState>;
  stud_work_states: XmlMultiElem<CommonStudWorkState>;
  week_days: XmlMultiElem<CommonWeekDay>;
  periodicity_types: XmlMultiElem<CommonPeriodicityType>;
  registr_types: XmlMultiElem<CommonRegistrType>;
  academ_debt_states: XmlMultiElem<CommonAcademDebtState>;
  prog_discipl_states: XmlMultiElem<CommonProgDisciplState>;
  curriculum_types: XmlMultiElem<CommonCurriculumType>;
  type_marks: XmlMultiElem<CommonTypeMark>;
  social_avatar_priority_types: XmlMultiElem<CommonSocialAvatarPriorityType>;
  azure_role_size_types: XmlMultiElem<CommonAzureRoleSizeType>;
  encoding_types: XmlMultiElem<CommonEncodingType>;
  portal_types: XmlMultiElem<CommonPortalType>;
  graph_types: XmlMultiElem<CommonGraphType>;
  aggregation_types: XmlMultiElem<CommonAggregationType>;
  delivery_types: XmlMultiElem<CommonDeliveryType>;
  good_instance_status_types: XmlMultiElem<CommonGoodInstanceStatusType>;
  order_status_types: XmlMultiElem<CommonOrderStatusType>;
  outstaff_contract_types: XmlMultiElem<CommonOutstaffContractType>;
  estaff_event_status_types: XmlMultiElem<CommonEstaffEventStatusType>;
  access_object_types: XmlMultiElem<CommonAccessObjectType>;
  employment_types: XmlMultiElem<CommonEmploymentType>;
  course_dynamics_category_types: XmlMultiElem<CommonCourseDynamicsCategoryType>;
  test_dynamics_category_types: XmlMultiElem<CommonTestDynamicsCategoryType>;
  learning_statistics_category_types: XmlMultiElem<CommonLearningStatisticsCategoryType>;
  test_statistics_category_types: XmlMultiElem<CommonTestStatisticsCategoryType>;
  course_part_types: XmlMultiElem<CommonCoursePartType>;
  position_assignment_types: XmlMultiElem<CommonPositionAssignmentType>;
  day_types: XmlMultiElem<CommonDayType>;
  months: XmlMultiElem<CommonMonth>;
  poll_item_types: XmlMultiElem<CommonPollItemType>;
  career_transition_direction_types: XmlMultiElem<CommonCareerTransitionDirectionType>;
  outstaff_order_execution_status_types: XmlMultiElem<CommonOutstaffOrderExecutionStatusType>;
  keyboard_types: XmlMultiElem<CommonKeyboardType>;
  service_provider_types: XmlMultiElem<CommonServiceProviderType>;
  payment_types: XmlMultiElem<CommonPaymentType>;
  qualification_statuss: XmlMultiElem<CommonQualificationStatus>;
  education_method_states: XmlMultiElem<CommonEducationMethodState>;
  learning_catalogs: XmlMultiElem<CommonLearningCatalog>;
  vclass_learning_catalogs: XmlMultiElem<CommonVclassLearningCatalog>;
  document_sent_types: XmlMultiElem<CommonDocumentSentType>;
  proctoring_objects: XmlMultiElem<CommonProctoringObject>;
  learning_record_statuss: XmlMultiElem<CommonLearningRecordStatus>;
  course_import_types: XmlMultiElem<CommonCourseImportType>;
  timezones: XmlMultiElem<CommonTimezone>;
  substitution_status_types: XmlMultiElem<CommonSubstitutionStatusType>;
  wiki_communication_types: XmlMultiElem<CommonWikiCommunicationType>;
  agreement_status_types: XmlMultiElem<CommonAgreementStatusType>;
  conversation_participant_states: XmlMultiElem<CommonConversationParticipantState>;
  message_states: XmlMultiElem<CommonMessageState>;
  conversation_formats: XmlMultiElem<CommonConversationFormat>;
  conversation_visible_types: XmlMultiElem<CommonConversationVisibleType>;
  acquaint_types: XmlMultiElem<CommonAcquaintType>;
  message_types: XmlMultiElem<CommonMessageType>;
  chatbot_out_types: XmlMultiElem<CommonChatbotOutType>;
  check_schedule_types: XmlMultiElem<CommonCheckScheduleType>;
  progress_types: XmlMultiElem<CommonProgressType>;
  design_vscode_save_types: XmlMultiElem<CommonDesignVscodeSaveType>;
  design_vscode_access_types: XmlMultiElem<CommonDesignVscodeAccessType>;
  violation_types: XmlMultiElem<CommonViolationType>;
  violation_states: XmlMultiElem<CommonViolationState>;
  proctor_states: XmlMultiElem<CommonProctorState>;
  proctoring_session_states: XmlMultiElem<CommonProctoringSessionState>;
  prohibition_types: XmlMultiElem<CommonProhibitionType>;
  conversation_message_states: XmlMultiElem<CommonConversationMessageState>;
  application_types: XmlMultiElem<CommonApplicationType>;
  qa_test_states: XmlMultiElem<CommonQaTestState>;
  qa_test_types: XmlMultiElem<CommonQaTestType>;
  qa_fixture_types: XmlMultiElem<CommonQaFixtureType>;
  qa_test_result_completion_states: XmlMultiElem<CommonQaTestResultCompletionState>;
  qa_test_result_states: XmlMultiElem<CommonQaTestResultState>;
  qa_test_assert_types: XmlMultiElem<CommonQaTestAssertType>;
  qa_test_assert_template_types: XmlMultiElem<CommonQaTestAssertTemplateType>;
  blog_types: XmlMultiElem<CommonBlogType>;
  working_condition_states: XmlMultiElem<CommonWorkingConditionState>;
  tariff_rate_types: XmlMultiElem<CommonTariffRateType>;
  conversation_object_types: XmlMultiElem<CommonConversationObjectType>;
  knowledge_acquaint_states: XmlMultiElem<CommonKnowledgeAcquaintState>;
  knowledge_acquaint_types: XmlMultiElem<CommonKnowledgeAcquaintType>;
  confirmation_types: XmlMultiElem<CommonConfirmationType>;
  acquaint_confirmation_types: XmlMultiElem<CommonAcquaintConfirmationType>;
  confirmation_expert_types: XmlMultiElem<CommonConfirmationExpertType>;
  willingness_travel_types: XmlMultiElem<CommonWillingnessTravelType>;
  statement_component_propertys: XmlMultiElem<CommonStatementComponentProperty>;
  signature_types: XmlMultiElem<CommonSignatureType>;
  personnel_document_states: XmlMultiElem<CommonPersonnelDocumentState>;
  layer_types: XmlMultiElem<CommonLayerType>;
  job_transfer_types: XmlMultiElem<CommonJobTransferType>;
  position_common_statuss: XmlMultiElem<CommonPositionCommonStatus>;
  typical_development_program_statuss: XmlMultiElem<CommonTypicalDevelopmentProgramStatus>;
  filter_types: XmlMultiElem<CommonFilterType>;
  good_states: XmlMultiElem<CommonGoodState>;
  web_person_state_types: XmlMultiElem<CommonWebPersonStateType>;
  websoft_apps: XmlMultiElem<CommonWebsoftApp>;
  usage_object_types: XmlMultiElem<CommonUsageObjectType>;
  perfom_condition_types: XmlMultiElem<CommonPerfomConditionType>;
  eval_code_types: XmlMultiElem<CommonEvalCodeType>;
  eval_text_types: XmlMultiElem<CommonEvalTextType>;
  material_locations: XmlMultiElem<CommonMaterialLocation>;
  reaction_types: XmlMultiElem<CommonReactionType>;
  create_task_types: XmlMultiElem<CommonCreateTaskType>;
  edit_task_types: XmlMultiElem<CommonEditTaskType>;
  view_task_types: XmlMultiElem<CommonViewTaskType>;
  task_statuses: XmlMultiElem<CommonTaskStatus>;
  chatbot_tile_types: XmlMultiElem<CommonChatbotTileType>;
  chatbot_action_types: XmlMultiElem<CommonChatbotActionType>;
  chatbot_button_types: XmlMultiElem<CommonChatbotButtonType>;
  workspace_themes: XmlMultiElem<CommonWorkspaceTheme>;
  video_formats: XmlMultiElem<CommonVideoFormat>;
  scheduler_types: XmlMultiElem<CommonSchedulerType>;
  week_types: XmlMultiElem<CommonWeekType>;
  processing_methods: XmlMultiElem<CommonProcessingMethod>;
  benefit_statuses: XmlMultiElem<CommonBenefitStatus>;
  benefit_item_statuses: XmlMultiElem<CommonBenefitItemStatus>;
  object_param_base_object_types: XmlMultiElem<CommonObjectParamBaseObjectType>;
  wiki_base_types: XmlMultiElem<CommonWikiBaseType>;
  wiki_base_statuses: XmlMultiElem<CommonWikiBaseStatus>;
  ai_model_types: XmlMultiElem<CommonAiModelType>;
}

declare const common: XmlElem<ICommon>;
