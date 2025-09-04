type OrgVendorStateCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус вендора */
  vendor_status_id: XmlElem<number | null, VendorStateCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /**
   * Состояние
   * @default assigned
   */
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  recertification_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
