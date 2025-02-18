type ContactCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  /** Тип контакта */
  type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default done
   */
  status_id: XmlElem<string | null, typeof common.contact_status_types>;
  /** Результат контакта */
  result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  /** Инициатор */
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оценивающего */
  initiator_person_fullname: XmlElem<string | null>;
  /** Контактное лицо */
  contact_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Контактное лицо */
  contact_person_fullname: XmlElem<string | null>;
  /** Организация */
  contact_org_name: XmlElem<string | null>;
  /** Должность */
  contact_position_name: XmlElem<string | null>;
  /** Организация */
  contact_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Предыдущий контакт */
  previous_contact_id: XmlElem<number | null, ContactCatalogDocumentTopElem>;
  /** Дата контакта */
  contact_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
