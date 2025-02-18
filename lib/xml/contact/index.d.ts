interface ContactDocumentPollResult {
  poll_result_id: XmlElem<number | null, PollResultCatalogDocumentTopElem>;
}

type ContactDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: ContactDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  /** Тип контакта */
  type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  initiator_person_fullname(): string;
  contact_person_fullname(): string;
  /** Инициатор */
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /** Контактное лицо */
  contact_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /** Организация */
  contact_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.contact_status_types>;
  /**
   * Дата контакта
   * @default Date()
   */
  contact_date: XmlElem<Date | null>;
  /** Предыдущий контакт */
  previous_contact_id: XmlElem<number | null, ContactCatalogDocumentTopElem>;
  /** Результат контакта */
  result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  poll_results: XmlMultiElem<ContactDocumentPollResult | null>;
  desc: XmlElem<string | null>;
};

type ContactDocument = XmlDocument & {
  TopElem: ContactDocumentTopElem;
  contact: ContactDocumentTopElem;
  DocDesc(): string;
};
