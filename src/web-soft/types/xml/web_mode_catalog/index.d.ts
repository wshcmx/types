type WebModeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * По умолчанию для портала
   * @default false
   */
  is_default: XmlElem<boolean>;
  /**
   * По умолчанию для администратора
   * @default false
   */
  is_default_admin: XmlElem<boolean>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Шаблон разметки */
  placeholder_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /**
   * Кеширование структуры
   * @default false
   */
  use_fcache: XmlElem<boolean | null>;
  /**
   * Доступна для поиска на портале
   * @default false
   */
  searchable_portal: XmlElem<boolean | null>;
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
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
