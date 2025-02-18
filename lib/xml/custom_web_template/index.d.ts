interface CustomWebTemplateDocumentTuning {
  height: XmlElem<number | null>;
}

interface CustomWebTemplateDocumentIncludeCustomWebTemplate {
  include_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
}

type CustomWebTemplateDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ZonesBase &
I18nBase &
WebVariablesBase & {
  Doc: CustomWebTemplateDocument;
  /** Комментарий */
  category: XmlElem<string | null>;
  /** Код */
  html: XmlElem<string | null>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  /**
   * Кешировать результат шаблона в сессию
   * @default false
   */
  use_session_cache: XmlElem<boolean>;
  /** @default default */
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  /** @default undefined */
  out_type: XmlElem<string, typeof common.out_types>;
  mode: XmlElem<string | null>;
  /** URL шаблона */
  template: XmlElem<string | null>;
  tuning: XmlElem<CustomWebTemplateDocumentTuning | null>;
  /** @temp */
  zone_selector: XmlElem<string | null>;
  include_custom_web_templates: XmlMultiElem<CustomWebTemplateDocumentIncludeCustomWebTemplate | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  /**
   * Включен
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CustomWebTemplateDocument = XmlDocument & {
  TopElem: CustomWebTemplateDocumentTopElem;
  custom_web_template: CustomWebTemplateDocumentTopElem;
  DocDesc(): string;
};
