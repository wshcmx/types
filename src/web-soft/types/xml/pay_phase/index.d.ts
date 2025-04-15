interface PayDocBase extends CostCurrencyBase {
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  nds: XmlElem<number | null>;
  exemption_nds: XmlElem<string | null>;
}

interface PayBase {
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  cost: XmlElem<number | null>;
  nds(): unknown;
}

interface PayPhaseDocumentCollaboratorExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
}

interface PayPhaseDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expense_items: XmlMultiElem<PayPhaseDocumentCollaboratorExpenseItem | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  not_pay: XmlElem<boolean | null>;
}

interface PayPhaseDocumentExpense {
  id: XmlElem<string | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Оплачено */
  is_pay: XmlElem<boolean | null>;
  /** Без НДС */
  no_nds: XmlElem<boolean | null>;
  exemption_nds: XmlElem<string | null>;
  supplier_name: XmlElem<string | null>;
  supplier_code: XmlElem<string | null>;
  /** Счет */
  invoice: XmlElem<PayBase | null>;
  /** Оплата */
  draft: XmlElem<PayBase | null>;
  /** Акт */
  act: XmlElem<PayBase | null>;
  /** Счет-фактура */
  invoice2: XmlElem<PayBase | null>;
}

interface PayPhaseDocumentInvoice extends PayDocBase {
  /** Оплачено */
  is_pay: XmlElem<boolean | null>;
  /** Без НДС */
  no_nds: XmlElem<boolean | null>;
}

type PayPhaseDocumentTopElem = XmlTopElem &
MsEventSdBase &
CostCurrencyBase &
ExpenseDistributionBase &
CostCentersBase &
AdminAccessBase & {
  Doc: PayPhaseDocument;
  /** Название */
  name: XmlElem<string | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Договор */
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Ставка НДС */
  nds_rate: XmlElem<number | null>;
  distribute_cost_type: XmlElem<string>;
  /** Сотрудники */
  collaborators: XmlMultiElem<PayPhaseDocumentCollaborator | null>;
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  /** Платежи */
  expenses: XmlMultiElem<PayPhaseDocumentExpense | null>;
  /** Счет */
  invoice: XmlElem<PayPhaseDocumentInvoice | null>;
  /** Оплата */
  draft: XmlElem<PayDocBase | null>;
  /** Акт */
  act: XmlElem<PayDocBase | null>;
  /** Счет-фактура */
  invoice2: XmlElem<PayDocBase | null>;
  invoice_sum: XmlElem<number | null>;
  draft_sum: XmlElem<number | null>;
  act_sum: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  create_name(): unknown;
  distribute_cost_centers(): unknown;
  distribute_payment_persons(): unknown;
  distribute_total_cost(): unknown;
};

type PayPhaseDocument = XmlDocument & {
  TopElem: PayPhaseDocumentTopElem;
  pay_phase: PayPhaseDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
