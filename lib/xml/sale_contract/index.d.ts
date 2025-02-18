interface SaleContractDocumentCost {
  id: XmlElem<string | null>;
  /** Валюта */
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  cost_value: XmlElem<number | null>;
}

interface SaleContractDocumentPrice {
  id: XmlElem<string | null>;
  /** Прайс */
  price_id: XmlElem<number | null, PriceCatalogDocumentTopElem>;
}

interface SaleContractDocumentProlongationInfo {
  id: XmlElem<string | null>;
  /** Сумма */
  cost: XmlElem<number | null>;
  /** Валюта */
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
}

type SaleContractDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SaleContractDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<number | null, ContractStateCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /**
   * Агентский договор
   * @default false
   */
  is_agent_contract: XmlElem<boolean | null>;
  /** Организация-агент */
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Клиент */
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Клиент */
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Менеджер */
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Договор */
  parent_sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Порядковый номер */
  serial_number: XmlElem<string | null>;
  /** Дата подписания */
  date_signature: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Предмет договора */
  subject_contract: XmlElem<string | null>;
  prev_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number | null, SaleContractTypeCatalogDocumentTopElem>;
  /** Подписывается договор у контрагента */
  contract_signature: XmlElem<string | null>;
  /** Договор */
  client_legal: XmlElem<string | null>;
  /** Договор */
  provider_legal: XmlElem<string | null>;
  /** Юридическое лицо (клиент) */
  client_legal_name: XmlElem<string | null>;
  /** Юридическое лицо (поставщик) */
  provider_legal_name: XmlElem<string | null>;
  /**
   * Безнадежный долг
   * @default false
   */
  bad_debt: XmlElem<boolean | null>;
  /** Стоимость */
  contract_cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  costs: XmlMultiElem<SaleContractDocumentCost | null>;
  prices: XmlMultiElem<SaleContractDocumentPrice | null>;
  prolongation_infos: XmlMultiElem<SaleContractDocumentProlongationInfo | null>;
  sent_date: XmlElem<Date | null>;
  sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  recipient: XmlElem<string | null>;
  consignment_document_number: XmlElem<string | null>;
  sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  back_sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  /**
   * Получено
   * @default false
   */
  is_received: XmlElem<boolean | null>;
  /** Дата получения */
  received_date: XmlElem<Date | null>;
  /** Комментарий */
  docs_comment: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SaleContractDocument = XmlDocument & {
  TopElem: SaleContractDocumentTopElem;
  sale_contract: SaleContractDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
