type RemoteCollectionCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Версия API
   * @default 0
   */
  api_ver: XmlElem<string | null>;
  /**
   * Готова к использованию в "Центре аналитики"
   * @default false
   */
  ready_to_analytics: XmlElem<boolean>;
  /**
   * По умолчанию на портале
   * @default false
   */
  default_for_portal: XmlElem<boolean>;
  /**
   * По умолчанию в приложениях
   * @default false
   */
  default_for_admin: XmlElem<boolean>;
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
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
