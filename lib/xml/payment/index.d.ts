type PaymentDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: PaymentDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.project_status_types>;
  /** Дата выплаты */
  pay_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Сумма */
  sum: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Тип выплат */
  payment_type_id: XmlElem<number | null, PaymentTypeCatalogDocumentTopElem>;
  /** Бюджет */
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PaymentDocument = XmlDocument & {
  TopElem: PaymentDocumentTopElem;
  payment: PaymentDocumentTopElem;
  DocDesc(): string;
};
