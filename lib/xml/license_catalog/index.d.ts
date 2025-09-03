type LicenseCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Официальное название */
  name: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  computer_name: XmlElem<string | null>;
  domain_name: XmlElem<string | null>;
  domain_short_name: XmlElem<string | null>;
  user_name: XmlElem<string | null>;
  /**
   * Временная
   * @default false
   */
  is_temporary: XmlElem<boolean>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Даты действия технической поддержки */
  maintaince_date: XmlElem<Date | null>;
  /** Дата окончания */
  users_num: XmlElem<number | null>;
  /** @default false */
  demo: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
