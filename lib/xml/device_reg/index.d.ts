interface DeviceRegDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

interface DeviceRegDocumentToken {
  id: XmlElem<number | null>;
  status: XmlElem<string | null>;
  creation_date: XmlElem<Date | null>;
  expiration_date: XmlElem<Date | null>;
}

type DeviceRegDocumentTopElem = XmlTopElem & {
  Doc: DeviceRegDocument;
  /** Код */
  code: XmlElem<string | null>;
  device_id: XmlElem<string | null>;
  device_desc: XmlElem<string | null>;
  pc: XmlElem<string | null>;
  last_access_date: XmlElem<Date | null>;
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DeviceRegDocumentView | null>;
  tokens: XmlMultiElem<DeviceRegDocumentToken | null>;
};

type DeviceRegDocument = XmlDocument & {
  TopElem: DeviceRegDocumentTopElem;
  device_reg: DeviceRegDocumentTopElem;
  DocDesc(): string;
};
