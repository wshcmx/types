interface FuncParamsDocumentProcessPackage {
  list_count: XmlElem<number>;
  progress_count: XmlElem<number>;
}

interface FuncParamsDocumentCourseReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseReport {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCourseReportColumn | null>;
}

interface FuncParamsDocumentCompetenceByDepartReport {
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  participant_type: XmlElem<string | null>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  disp_all_comp_list: XmlElem<boolean>;
  disp_ideal_profile_mark: XmlElem<boolean>;
  process_only_done: XmlElem<boolean>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_inds: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  disp_comp_mark_name: XmlElem<boolean>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  view_sub_selector: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

interface FuncParamsDocumentEventDepReportEventTypeDuration {
  id: XmlElem<number | null>;
  type: XmlElem<string | null, typeof common.event_types>;
  event_duration: XmlElem<number>;
}

interface FuncParamsDocumentEventDepReport {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  use_fact_duration: XmlElem<boolean>;
  show_only_current_period_workers: XmlElem<boolean>;
  add_courses: XmlElem<boolean>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  uses_place_hier: XmlElem<boolean>;
  use_whole_staff: XmlElem<boolean>;
  count_training_days: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  show_all: XmlElem<boolean>;
  close_all: XmlElem<boolean>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  course_duration: XmlElem<number>;
  event_duration: XmlElem<number>;
  code_contain: XmlElem<string | null>;
  event_type_durations: XmlMultiElem<FuncParamsDocumentEventDepReportEventTypeDuration | null>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
}

interface FuncParamsDocumentBudgetReportCostCenter {
  id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
}

interface FuncParamsDocumentBudgetReport {
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  disp_expense_items: XmlElem<boolean>;
  cost_centers: XmlMultiElem<FuncParamsDocumentBudgetReportCostCenter | null>;
}

interface FuncParamsDocumentRequestReport {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Статус */
  status_id: XmlElem<string, typeof common.request_status_types>;
}

interface FuncParamsDocumentServerLogReport {
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  type_id: XmlElem<string>;
  show_alert: XmlElem<boolean>;
}

interface FuncParamsDocumentEducationMethodReportEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface FuncParamsDocumentEducationMethodReport {
  education_methods: XmlMultiElem<FuncParamsDocumentEducationMethodReportEducationMethod | null>;
  education_method_selector: XmlElem<string>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

interface FuncParamsDocumentViewEventByDepartReport {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  sort_type_id: XmlElem<string>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  disp_average_duration: XmlElem<boolean>;
  disp_average_cost: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  view_sub_selector: XmlElem<number | null>;
  sort_type_aggregated_id: XmlElem<string>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
}

interface FuncParamsDocumentViewCourseByDepartReportPerson {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportOrg {
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewCourseByDepartReportColumn {
  name: XmlElem<string | null>;
}

interface FuncParamsDocumentViewCourseByDepartReport {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  persons: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportPerson | null>;
  orgs: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportOrg | null>;
  subdivisions: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportSubdivision | null>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date | null>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number | null>;
  disp_learning_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sort_type_id: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentViewCourseByDepartReportColumn | null>;
}

interface FuncParamsDocumentViewTestByDepartReportPerson {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportOrg {
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface FuncParamsDocumentViewTestByDepartReportColumn {
  name: XmlElem<string | null>;
}

interface FuncParamsDocumentViewTestByDepartReport {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  persons: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportPerson | null>;
  orgs: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportOrg | null>;
  subdivisions: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportSubdivision | null>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sort_type_id: XmlElem<string>;
  sort_type_aggregated_id: XmlElem<string>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date | null>;
  disp_learning_type: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentViewTestByDepartReportColumn | null>;
}

interface FuncParamsDocumentCertificateTypeReport {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
}

interface FuncParamsDocumentTestReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentTestReport {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  columns: XmlMultiElem<FuncParamsDocumentTestReportColumn | null>;
}

interface FuncParamsDocumentViewQuestionByDepartReport {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_type: XmlElem<string>;
  expanded_all: XmlElem<boolean>;
}

interface FuncParamsDocumentEventPersonReport extends ViewColumnsBase {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
  disp_status_id: XmlElem<string, typeof common.event_status_types>;
  is_web_client: XmlElem<boolean>;
}

interface FuncParamsDocumentProfilingReport {
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

interface FuncParamsDocumentLearningDynamicsReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentLearningDynamicsReport {
  block_name: XmlElem<string | null>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  time_period_type: XmlElem<string>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentLearningDynamicsReportColumn | null>;
}

interface FuncParamsDocumentLearningStatisticsReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentLearningStatisticsReport {
  block_name: XmlElem<string | null>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentLearningStatisticsReportColumn | null>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportCourse {
  id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportSelectedField {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseIntegralEfficiencyReport {
  courses: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportCourse | null>;
  response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  selected_fields: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportSelectedField | null>;
  formula_column_value: XmlElem<string | null>;
  formula_column_title: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCourseIntegralEfficiencyReportColumn | null>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportAssessment {
  id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportSelectedItem {
  id: XmlElem<number | null>;
}

interface FuncParamsDocumentQuestionsAnalyticsReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
  sort_field: XmlElem<string | null>;
}

interface FuncParamsDocumentQuestionsAnalyticsReport {
  assessments: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportAssessment | null>;
  selected_items: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportSelectedItem | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  hier_role_select: XmlElem<boolean>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  percent_difficult: XmlElem<number>;
  percent_simple: XmlElem<number>;
  elapsed_percent: XmlElem<number>;
  correlation_coefficient: XmlElem<number>;
  variance: XmlElem<number>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sort_type_id: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentQuestionsAnalyticsReportColumn | null>;
}

interface FuncParamsDocumentStatisticReportStatisticRec {
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
}

interface FuncParamsDocumentStatisticReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentStatisticReport {
  statistic_recs: XmlMultiElem<FuncParamsDocumentStatisticReportStatisticRec | null>;
  period_type: XmlElem<string | null, typeof common.perioditys>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  show_alert: XmlElem<boolean>;
  graph_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentStatisticReportColumn | null>;
}

interface FuncParamsDocumentCourseCommentReportModule {
  code: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseCommentReportVersion {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseCommentReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseCommentReport {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  modules: XmlMultiElem<FuncParamsDocumentCourseCommentReportModule | null>;
  versions: XmlMultiElem<FuncParamsDocumentCourseCommentReportVersion | null>;
  columns: XmlMultiElem<FuncParamsDocumentCourseCommentReportColumn | null>;
}

interface FuncParamsDocumentCourseModuleStatusReportModule {
  code: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseModuleStatusReportVersion {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseModuleStatusReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentCourseModuleStatusReport {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  disp_learning_type: XmlElem<string>;
  is_web_client: XmlElem<boolean>;
  modules: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportModule | null>;
  versions: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportVersion | null>;
  columns: XmlMultiElem<FuncParamsDocumentCourseModuleStatusReportColumn | null>;
}

interface FuncParamsDocumentCareerReserveReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentCareerReserveReport {
  type: XmlElem<string>;
  /** Тип */
  position_type: XmlElem<string>;
  /** Название должности */
  target_position_name: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  readiness_date_start: XmlElem<Date | null>;
  readiness_date_finish: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentCareerReserveReportColumn | null>;
}

interface FuncParamsDocumentRecommenderUseReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderUseReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentRecommenderUseReport {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderUseReportRecommenderAlgorithm | null>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderUseReportColumn | null>;
}

interface FuncParamsDocumentRecommenderCompareReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderCompareReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
}

interface FuncParamsDocumentRecommenderCompareReport {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderCompareReportRecommenderAlgorithm | null>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderCompareReportColumn | null>;
}

interface FuncParamsDocumentRecommenderDetailReportRecommenderAlgorithm {
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface FuncParamsDocumentRecommenderDetailReportColumn {
  name: XmlElem<string | null>;
  const: XmlElem<string | null>;
  sort_field: XmlElem<string | null>;
}

interface FuncParamsDocumentRecommenderDetailReport {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  recommender_algorithms: XmlMultiElem<FuncParamsDocumentRecommenderDetailReportRecommenderAlgorithm | null>;
  graph_type: XmlElem<string>;
  show_alert: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  sort_type_id: XmlElem<string>;
  columns: XmlMultiElem<FuncParamsDocumentRecommenderDetailReportColumn | null>;
}

type FuncParamCatalogDocumentTopElem = XmlTopElem & {
  process_package: XmlElem<FuncParamsDocumentProcessPackage | null>;
  course_report: XmlElem<FuncParamsDocumentCourseReport | null>;
  competence_by_depart_report: XmlElem<FuncParamsDocumentCompetenceByDepartReport | null>;
  event_dep_report: XmlElem<FuncParamsDocumentEventDepReport | null>;
  budget_report: XmlElem<FuncParamsDocumentBudgetReport | null>;
  request_report: XmlElem<FuncParamsDocumentRequestReport | null>;
  server_log_report: XmlElem<FuncParamsDocumentServerLogReport | null>;
  education_method_report: XmlElem<FuncParamsDocumentEducationMethodReport | null>;
  view_event_by_depart_report: XmlElem<FuncParamsDocumentViewEventByDepartReport | null>;
  view_course_by_depart_report: XmlElem<FuncParamsDocumentViewCourseByDepartReport | null>;
  view_test_by_depart_report: XmlElem<FuncParamsDocumentViewTestByDepartReport | null>;
  budget_transfers_report: XmlElem<MsViewCatalogBase | null>;
  certificate_type_report: XmlElem<FuncParamsDocumentCertificateTypeReport | null>;
  test_report: XmlElem<FuncParamsDocumentTestReport | null>;
  view_question_by_depart_report: XmlElem<FuncParamsDocumentViewQuestionByDepartReport | null>;
  event_person_report: XmlElem<FuncParamsDocumentEventPersonReport | null>;
  profiling_report: XmlElem<FuncParamsDocumentProfilingReport | null>;
  learning_dynamics_report: XmlElem<FuncParamsDocumentLearningDynamicsReport | null>;
  learning_statistics_report: XmlElem<FuncParamsDocumentLearningStatisticsReport | null>;
  course_integral_efficiency_report: XmlElem<FuncParamsDocumentCourseIntegralEfficiencyReport | null>;
  questions_analytics_report: XmlElem<FuncParamsDocumentQuestionsAnalyticsReport | null>;
  statistic_report: XmlElem<FuncParamsDocumentStatisticReport | null>;
  course_comment_report: XmlElem<FuncParamsDocumentCourseCommentReport | null>;
  course_module_status_report: XmlElem<FuncParamsDocumentCourseModuleStatusReport | null>;
  career_reserve_report: XmlElem<FuncParamsDocumentCareerReserveReport | null>;
  recommender_use_report: XmlElem<FuncParamsDocumentRecommenderUseReport | null>;
  recommender_compare_report: XmlElem<FuncParamsDocumentRecommenderCompareReport | null>;
  recommender_detail_report: XmlElem<FuncParamsDocumentRecommenderDetailReport | null>;
  error_text: XmlElem<string | null>;
  error_const: XmlElem<string | null>;
  application: XmlElem<string | null>;
};
