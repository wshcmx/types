interface CertificateTypeDocumentQualification {
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
}

interface CertificateTypeDocumentCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
}

type CertificateTypeDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateTypeDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Нормативный срок */
  duration: XmlElem<number | null>;
  /**
   * Бессрочный
   * @default false
   */
  forever: XmlElem<boolean>;
  /**
   * Необходимое количество
   * @default 0
   */
  required_quantity: XmlElem<number | null>;
  /** Требуемые квалификации */
  qualifications: XmlMultiElem<CertificateTypeDocumentQualification | null>;
  /** Типы сертификатов */
  certificate_types: XmlMultiElem<CertificateTypeDocumentCertificateType | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type CertificateTypeDocument = XmlDocument & {
  TopElem: CertificateTypeDocumentTopElem;
  certificate_type: CertificateTypeDocumentTopElem;
  DocDesc(): string;
};
