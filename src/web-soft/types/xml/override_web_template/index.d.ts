type OverrideWebTemplateDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: OverrideWebTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Родительский объект */
  parent_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  /** Исключения Mode */
  mode_exception: XmlElem<string | null>;
  /** Зона */
  zone: XmlElem<string | null>;
  /** Шаблон */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Шаблон */
  custom_web_template_name: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /**
   * Позиция в списке
   * @default 0
   */
  weight: XmlElem<number>;
  /**
   * Включен
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  cache_static: XmlElem<string | null>;
  cache_dynamic: XmlElem<string | null>;
  cache_html: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  cache_refresh: XmlElem<boolean | null>;
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
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type OverrideWebTemplateDocument = XmlDocument & {
  TopElem: OverrideWebTemplateDocumentTopElem;
  override_web_template: OverrideWebTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
