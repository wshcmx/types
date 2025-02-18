type AccountDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  Doc: AccountDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Баланс
   * @default 0.
   */
  balance: XmlElem<number>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.account_status_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type AccountDocument = XmlDocument & {
  TopElem: AccountDocumentTopElem;
  account: AccountDocumentTopElem;
  DocDesc(): string;
};
