type PayStageCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Организация клиента */
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Договор с клиентом партнёра */
  agent_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /**
   * Агентский договор
   * @default false
   */
  is_agent_sale_contract: XmlElem<boolean | null>;
  /** Организация-партнёр */
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /**
   * Предоплата
   * @default false
   */
  is_prepayment: XmlElem<boolean | null>;
  /** Тип стоимости этапа */
  cost_type: XmlElem<string | null>;
  /** Минимальная сумма */
  min_cost: XmlElem<number | null>;
  /** Максимальная сумма */
  max_cost: XmlElem<number | null>;
  /** Фактическая сумма */
  fact_cost: XmlElem<number | null>;
  /** Тип */
  type_id: XmlElem<string | null>;
  /** Способ закрытия */
  closing_method: XmlElem<string | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /**
   * Автозакрытие
   * @default false
   */
  is_autoclosing: XmlElem<boolean | null>;
  /** Срок автозакрытия (дней) */
  autoclosing_period: XmlElem<number | null>;
  OnBuild(): void;
};
