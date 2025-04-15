type InvoiceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /**
   * Счет оплачен
   * @default false
   */
  is_paid: XmlElem<boolean>;
  /**
   * Итоговая сумма
   * @default 0.0
   */
  amount: XmlElem<number | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
