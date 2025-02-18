type CertificateDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateDocument;
  /** Серия */
  serial: XmlElem<string | null>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Тип сертификата */
  type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  /** Название типа сертификата */
  type_name: XmlElem<string | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Дата выдачи */
  delivery_date: XmlElem<Date | null>;
  /** Истекает */
  expire_date: XmlElem<Date | null>;
  /**
   * Действителен
   * @default true
   */
  valid: XmlElem<boolean>;
  /** Подписан */
  signed_by_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Подписан */
  signed_by_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  update_expire_date(): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CertificateDocument = XmlDocument & {
  TopElem: CertificateDocumentTopElem;
  certificate: CertificateDocumentTopElem;
  OnCreate(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
