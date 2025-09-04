type SaleContractCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<number | null, ContractStateCatalogDocumentTopElem>;
  /**
   * Агентский договор
   * @default false
   */
  is_agent_contract: XmlElem<boolean | null>;
  /** Организация-агент */
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
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
  /** Юридическое лицо (клиент) */
  client_legal: XmlElem<string | null>;
  /** Юридическое лицо (поставщик) */
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
  /** Подписывается договор у контрагента */
  contract_signature: XmlElem<string | null>;
  prev_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number | null, SaleContractTypeCatalogDocumentTopElem>;
  /** Дата отправки */
  sent_date: XmlElem<Date | null>;
  /** Получатель */
  recipient: XmlElem<string | null>;
  /** Номер транспортной накладной */
  consignment_document_number: XmlElem<string | null>;
  /** @default false */
  is_received: XmlElem<boolean | null>;
  /** Дата получения */
  received_date: XmlElem<Date | null>;
  /** Комментарий к состоянию документа */
  docs_comment: XmlElem<string | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
