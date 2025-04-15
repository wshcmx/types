interface BudgetPeriodDocumentDay {
  /** Дата */
  date: XmlElem<Date | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.day_types>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type BudgetPeriodDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetPeriodDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский бюджетный период */
  parent_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** @default none */
  period_type: XmlElem<string, typeof common.perioditys>;
  days: XmlMultiElem<BudgetPeriodDocumentDay | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type BudgetPeriodDocument = XmlDocument & {
  TopElem: BudgetPeriodDocumentTopElem;
  budget_period: BudgetPeriodDocumentTopElem;
  DocDesc(): string;
};
