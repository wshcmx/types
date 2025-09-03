type DeviceRegCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  device_id: XmlElem<string | null>;
  last_access_date: XmlElem<Date | null>;
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** uf_tokens */
  tokens: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
