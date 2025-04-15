type ExpenseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  number: XmlElem<string | null>;
  expense_create_date: XmlElem<Date | null>;
  /** @default false */
  is_formed: XmlElem<boolean | null>;
  payment_plan_date: XmlElem<Date | null>;
  /**
   * Оплачен
   * @default false
   */
  is_paid: XmlElem<boolean | null>;
  /** Дата оплаты */
  payment_fact_date: XmlElem<Date | null>;
  /**
   * Безнадежный долг
   * @default false
   */
  bad_debt: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  /** Дата отправки */
  sent_date: XmlElem<Date | null>;
  /** Получатель */
  recipient: XmlElem<string | null>;
  /** Номер транспортной накладной */
  consignment_document_number: XmlElem<string | null>;
  /** @default false */
  is_received: XmlElem<boolean | null>;
  /** Дата получения */
  received_date: XmlElem<Date | null>;
  /** Комментарий к состоянию документа */
  docs_comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
