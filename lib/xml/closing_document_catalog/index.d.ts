type ClosingDocumentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Этап договора */
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.payment_types>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Дата создания */
  expense_create_date: XmlElem<Date | null>;
  /**
   * Сформирован
   * @default false
   */
  is_formed: XmlElem<boolean | null>;
  /** Дата отправки */
  sent_date: XmlElem<Date | null>;
  /** Получатель */
  recipient: XmlElem<string | null>;
  /** Номер транспортной накладной */
  consignment_document_number: XmlElem<string | null>;
  /** @default false */
  is_received: XmlElem<boolean | null>;
  receiving_status_id: XmlElem<number | null, ClosingDocumentStatusCatalogDocumentTopElem>;
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
