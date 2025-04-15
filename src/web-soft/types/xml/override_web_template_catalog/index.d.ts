type OverrideWebTemplateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
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
  /** Позиция в списке */
  weight: XmlElem<number | null>;
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
  /** Включен */
  is_enabled: XmlElem<boolean | null>;
  /** Количество переменных */
  wvars_num: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
