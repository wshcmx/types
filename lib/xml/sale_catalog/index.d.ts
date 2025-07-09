type SaleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  /** Статус */
  status_id: XmlElem<number | null, SaleStatusCatalogDocumentTopElem>;
  /** Номер договора */
  number: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Организация клиента */
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Клиент */
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Менеджер */
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
