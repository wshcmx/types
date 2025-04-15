interface ActiveWebTemplateDocumentOverrideWebTemplate extends WebVariablesBase {
  override_web_template_id: XmlElem<number | null>;
  mode: XmlElem<string | null>;
  access_mode: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  custom_web_template_id: XmlElem<number | null>;
  zone: XmlElem<string | null>;
  cache_static: XmlElem<string | null>;
  cache_dynamic: XmlElem<string | null>;
  cache_html: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
}

interface ActiveWebTemplateDocumentCustomWebTemplate extends WebVariablesBase, ZonesBase, I18nBase {
  custom_web_template_id: XmlElem<number | null>;
  /** @default false */
  saved: XmlElem<boolean>;
  /** @default undefined */
  out_type: XmlElem<string, typeof common.out_types>;
  /** @default default */
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  /** @default false */
  use_session_cache: XmlElem<boolean>;
  web_page: XmlElem<string | null>;
  html: XmlElem<string | null>;
}

type ActiveWebTemplateDocumentTopElem = XmlTopElem & {
  Doc: ActiveWebTemplateDocument;
  name(): string;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
  /** Роль сотрудника */
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  hash(): string;
  override_web_templates: XmlMultiElem<ActiveWebTemplateDocumentOverrideWebTemplate | null>;
  custom_web_templates: XmlMultiElem<ActiveWebTemplateDocumentCustomWebTemplate | null>;
  /** @default 0 */
  counter_template: XmlElem<number>;
  /** @default 0 */
  counter_saved_template: XmlElem<number>;
  /**
   * @temp
   * @default 0
   */
  counter_saved_return: XmlElem<number>;
  /** Об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActiveWebTemplateDocument = XmlDocument & {
  TopElem: ActiveWebTemplateDocumentTopElem;
  active_web_template: ActiveWebTemplateDocumentTopElem;
  DocDesc(): string;
};
