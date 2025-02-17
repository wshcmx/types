type TransactionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /**
   * Приход или расход
   * @default 2
   */
  direction: XmlElem<number>;
  /** Биллинговый счет */
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Сумма */
  amount: XmlElem<number | null>;
  /** Категория */
  objects: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
