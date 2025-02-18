type PersonalDataProcessingConsentDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: PersonalDataProcessingConsentDocument;
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО */
  person_fullname: XmlElem<string | null>;
  /** Дата и время согласия */
  consent_date: XmlElem<Date | null>;
  /**
   * Тип
   * @default collaborator
   */
  person_type: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  is_candidate: XmlElem<boolean | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type PersonalDataProcessingConsentDocument = XmlDocument & {
  TopElem: PersonalDataProcessingConsentDocumentTopElem;
  personal_data_processing_consent: PersonalDataProcessingConsentDocumentTopElem;
  DocDesc(): string;
  OnInit(): void;
};
