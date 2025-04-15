type WebRuleDocumentTopElem = XmlTopElem & {
  Doc: WebRuleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Является шаблоном */
  is_pattern(): boolean;
  /** Использует подстановки */
  use_matches(): boolean;
  url: XmlElem<string | null>;
  script: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  redirect_url: XmlElem<string | null>;
  /** @default 0 */
  redirect_type: XmlElem<number>;
  /** Тип страницы */
  redirect_web_mode_id: XmlElem<number | null, WebModeCatalogDocumentTopElem>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  weight: XmlElem<number | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  script_validate(path: unknown, parameters: unknown): unknown;
};

type WebRuleDocument = XmlDocument & {
  TopElem: WebRuleDocumentTopElem;
  web_rule: WebRuleDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
