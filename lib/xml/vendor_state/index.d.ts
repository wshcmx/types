interface VendorStateDocumentCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  required_quantity: XmlElem<number | null>;
}

type VendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VendorStateDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  certificate_types: XmlMultiElem<VendorStateDocumentCertificateType | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type VendorStateDocument = XmlDocument & {
  TopElem: VendorStateDocumentTopElem;
  vendor_state: VendorStateDocumentTopElem;
  DocDesc(): string;
};
