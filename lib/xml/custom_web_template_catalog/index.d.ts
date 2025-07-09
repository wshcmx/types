type CustomWebTemplateCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AccessDocBase & {
  /** Категория */
  category: XmlElem<string | null>;
  /** Тип шаблона */
  cwt_type: XmlElem<string | null, typeof common.cwt_types>;
  /** Тип результата */
  out_type: XmlElem<string | null, typeof common.out_types>;
  /** mode */
  mode: XmlElem<string | null>;
  /** URL шаблона */
  template: XmlElem<string | null>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Роль */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
