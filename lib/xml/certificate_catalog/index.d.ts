type CertificateCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Серия */
  serial: XmlElem<string | null>;
  /** Номер сертификата */
  number: XmlElem<string | null>;
  /** Сертификат */
  type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  /** Название сертификата */
  type_name: XmlElem<string | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Действителен */
  valid: XmlElem<boolean | null>;
  /** Дата выдачи */
  delivery_date: XmlElem<Date | null>;
  /** Истекает */
  expire_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
