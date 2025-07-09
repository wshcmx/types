type SiteCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Язык */
  lng_id: XmlElem<string | null, LngCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Является встроенным
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
  /** Владельцы */
  owner_object: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
