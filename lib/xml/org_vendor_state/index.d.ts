type OrgVendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OrgVendorStateDocument;
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
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type OrgVendorStateDocument = XmlDocument & {
  TopElem: OrgVendorStateDocumentTopElem;
  org_vendor_state: OrgVendorStateDocumentTopElem;
  DocDesc(): string;
};
