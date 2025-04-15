interface LocalSettingsDocumentNewsAuth {
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
}

interface LocalSettingsDocumentBlockInformer {
  id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
}

interface LocalSettingsDocumentBlock {
  id: XmlElem<string | null>;
  is_custom: XmlElem<boolean | null>;
  informers: XmlMultiElem<LocalSettingsDocumentBlockInformer | null>;
}

interface LocalSettingsDocumentViewDisplayRole {
  catalog_name: XmlElem<string | null>;
  disp: XmlElem<boolean>;
}

interface LocalSettingsDocumentView {
  sel_date: XmlElem<Date | null>;
  is_work_month: XmlElem<boolean>;
  view_section: XmlElem<boolean>;
  display_roles: XmlMultiElem<LocalSettingsDocumentViewDisplayRole | null>;
  display_empty_roles: XmlElem<boolean>;
  view_sub_type: XmlElem<string>;
  view_expanded_type: XmlElem<boolean>;
  text_selector: XmlElem<string>;
  list_hier_view_selector: XmlElem<string>;
  hier_view_disp_type: XmlElem<string>;
  disp_calendar_event_preview: XmlElem<boolean>;
  disp_calendar_event_phase: XmlElem<boolean>;
  preview_width_index: XmlElem<number | null>;
  preview_location: XmlElem<string | null>;
  remember_last_reports_settings: XmlElem<boolean>;
}

interface LocalSettingsDocumentViewFilter {
  catalog: XmlElem<string | null>;
  scheme_id: XmlElem<string | null, typeof lists.view_conditions_schemes>;
}

interface LocalSettingsDocumentTab {
  url: XmlElem<string | null>;
  title: XmlElem<string | null>;
  image_url: XmlElem<string | null>;
  access_block: XmlElem<string | null>;
  catalog_name: XmlElem<string | null>;
}

interface LocalSettingsDocumentViewTypeColumn {
  name: XmlElem<string | null>;
}

interface LocalSettingsDocumentViewType {
  catalog: XmlElem<string | null>;
  columns: XmlMultiElem<LocalSettingsDocumentViewTypeColumn | null>;
  link_selector: XmlElem<string | null>;
}

interface LocalSettingsDocumentSmallAccessBlock {
  id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
}

interface LocalSettingsDocumentHome {
  last_action_date: XmlElem<Date | null>;
  last_forum_date: XmlElem<Date | null>;
  last_stat_date: XmlElem<Date | null>;
}

interface LocalSettingsDocumentViewCourseIntegralEfficiencyReportResponseTypeField {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
}

interface LocalSettingsDocumentViewCourseIntegralEfficiencyReport {
  response_type_id: XmlElem<number | null>;
  response_type_fields: XmlMultiElem<LocalSettingsDocumentViewCourseIntegralEfficiencyReportResponseTypeField | null>;
  formula_column_value: XmlElem<string | null>;
  formula_column_title: XmlElem<string | null>;
}

interface LocalSettingsDocumentViewQuestionsAnalyticsReport {
  percent_difficult: XmlElem<number | null>;
  percent_simple: XmlElem<number | null>;
  elapsed_percent: XmlElem<number | null>;
  correlation_coefficient: XmlElem<number | null>;
  variance: XmlElem<number | null>;
}

interface LocalSettingsDocumentViewItems {
  display_question_richtext: XmlElem<boolean | null>;
  display_answer_richtext: XmlElem<boolean | null>;
}

interface LocalSettingsDocumentAdminConfiguration {
  func_block_id: XmlElem<string | null>;
  disp_desc: XmlElem<boolean>;
}

interface LocalSettingsDocumentResourceSetting {
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  role_id: XmlElem<number | null>;
}

interface LocalSettingsDocumentCustomData {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

type LocalSettingCatalogDocumentTopElem = XmlTopElem & {
  settings: XmlElem<LocalSettingsBase | null>;
  news_auth: XmlElem<LocalSettingsDocumentNewsAuth | null>;
  blocks: XmlMultiElem<LocalSettingsDocumentBlock | null>;
  certificate_template_exists: XmlElem<boolean>;
  ui_lng_id: XmlElem<string | null>;
  view: XmlElem<LocalSettingsDocumentView | null>;
  get_access_block_items(): unknown;
  view_filters: XmlMultiElem<LocalSettingsDocumentViewFilter | null>;
  package_id: XmlElem<string | null, PackageObjectCatalogDocumentTopElem>;
  first_catalog_url: XmlElem<string | null>;
  last_catalog_url: XmlElem<string | null>;
  tabs: XmlMultiElem<LocalSettingsDocumentTab | null>;
  first_list_url: XmlElem<string | null>;
  view_types: XmlMultiElem<LocalSettingsDocumentViewType | null>;
  small_access_blocks: XmlMultiElem<LocalSettingsDocumentSmallAccessBlock | null>;
  first_disp_small_access_blocks: XmlElem<boolean>;
  access_block_view_type: XmlElem<string>;
  home: XmlElem<LocalSettingsDocumentHome | null>;
  view_course_integral_efficiency_report: XmlElem<LocalSettingsDocumentViewCourseIntegralEfficiencyReport | null>;
  view_questions_analytics_report: XmlElem<LocalSettingsDocumentViewQuestionsAnalyticsReport | null>;
  view_items: XmlElem<LocalSettingsDocumentViewItems | null>;
  cur_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  tab_block_id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  last_block_id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  tab_block_type: XmlElem<string | null>;
  task_progress_delay: XmlElem<number>;
  admin_configuration: XmlElem<LocalSettingsDocumentAdminConfiguration | null>;
  resource_settings: XmlMultiElem<LocalSettingsDocumentResourceSetting | null>;
  custom_datas: XmlMultiElem<LocalSettingsDocumentCustomData | null>;
};
