interface InvoiceDocumentCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Стоимость */
  price: XmlElem<number | null>;
  /** @default 0 */
  units_num: XmlElem<number>;
}

type InvoiceDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: InvoiceDocument;
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
  /** Транзакция */
  transaction_id: XmlElem<number | null, TransactionCatalogDocumentTopElem>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Курсы */
  courses: XmlMultiElem<InvoiceDocumentCourse | null>;
  /** @temp */
  total_price: XmlElem<number | null>;
  essentials: XmlElem<EssentialBase | null>;
  /** Номер платежного поручения */
  draft_num: XmlElem<string | null>;
  /** Дата платежного поручения */
  draft_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type InvoiceDocument = XmlDocument & {
  TopElem: InvoiceDocumentTopElem;
  invoice: InvoiceDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
