interface SaleDocumentDocument {
  /** @default tools.random_string( 6 ) */
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  sent_by_us: XmlElem<boolean | null>;
  sent_date: XmlElem<Date | null>;
  sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  back_sent_date: XmlElem<Date | null>;
  back_sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
}

type SaleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: SaleDocument;
  code: XmlElem<string | null>;
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
  documents: XmlMultiElem<SaleDocumentDocument | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type SaleDocument = XmlDocument & {
  TopElem: SaleDocumentTopElem;
  sale: SaleDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
