type ApplicationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /**
   * Тип
   * @default universal
   */
  type: XmlElem<string, typeof common.application_types>;
  /** Форма списка */
  list_xms_url: XmlElem<string | null>;
  /** Форма страницы по умолчанию */
  default_xms_url: XmlElem<string | null>;
  /** Тип страницы */
  web_mode_id: XmlMultiElemObject<number | null, WebModeCatalogDocumentTopElem>;
  /** Вендор */
  vendor: XmlElem<string | null>;
  /** Библиотека */
  vendor_library: XmlElem<string | null>;
  /** Тип лицензии */
  lic_type: XmlElem<string | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
