type SaleContractCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  state_id: XmlElem<number, ContractStateCatalogDocumentTopElem>;
  is_agent_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  parent_sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  number: XmlElem<string>;
  serial_number: XmlElem<string>;
  date_signature: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_legal: XmlElem<string>;
  provider_legal: XmlElem<string>;
  client_legal_name: XmlElem<string>;
  provider_legal_name: XmlElem<string>;
  bad_debt: XmlElem<boolean>;
  contract_cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  contract_signature: XmlElem<string>;
  prev_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number, SaleContractTypeCatalogDocumentTopElem>;
  sent_date: XmlElem<Date>;
  recipient: XmlElem<string>;
  consignment_document_number: XmlElem<string>;
  is_received: XmlElem<boolean>;
  received_date: XmlElem<Date>;
  docs_comment: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
