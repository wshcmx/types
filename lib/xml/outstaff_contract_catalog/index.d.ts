type OutstaffContractCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  /**
   * Статус
   * @default forming
   */
  status: XmlElem<string, typeof common.order_status_types>;
  /**
   * Тип
   * @default outstaff_persons
   */
  type_id: XmlElem<string, typeof common.outstaff_contract_types>;
  /** Номер договора */
  number: XmlElem<string | null>;
  /** Тип договора */
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата завершения действия */
  finish_date: XmlElem<Date | null>;
  /** Провайдер временного персонала */
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  /** Условное название */
  disp_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
