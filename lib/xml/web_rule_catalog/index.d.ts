type WebRuleCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** URL */
  url: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean | null>;
  /** Является шаблоном */
  is_pattern: XmlElem<boolean | null>;
  /** Использует подстановки */
  use_matches: XmlElem<boolean | null>;
  /** Redirect URL */
  redirect_url: XmlElem<string | null>;
  /** Redirect type */
  redirect_type: XmlElem<number | null>;
  /** Тип страницы */
  redirect_web_mode_id: XmlElem<number | null, WebModeCatalogDocumentTopElem>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
