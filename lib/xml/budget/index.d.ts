interface BudgetDocumentTransfer {
  id: XmlElem<string | null>;
  /** Целевой бюджет */
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Пользователь */
  login: XmlElem<string | null>;
  /** Сумма */
  sum: XmlElem<number | null>;
  /**
   * Приход или расход
   * @default false
   */
  direction: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type BudgetDocumentTopElem = XmlTopElem &
CostCurrencyBase &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BudgetDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  state: XmlElem<string, typeof common.budget_state_types>;
  /** Тип бюджета */
  type_id: XmlElem<number | null, BudgetTypeCatalogDocumentTopElem>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Статья затрат */
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /**
   * Утвержден
   * @default false
   */
  is_approved: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Перераспределение средств */
  transfers: XmlMultiElem<BudgetDocumentTransfer | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type BudgetDocument = XmlDocument & {
  TopElem: BudgetDocumentTopElem;
  budget: BudgetDocumentTopElem;
  DocDesc(): string;
};
