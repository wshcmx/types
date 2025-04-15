type SalaryPaymentTypeDocumentTopElem = XmlTopElem & {
  Doc: SalaryPaymentTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SalaryPaymentTypeDocument = XmlDocument & {
  TopElem: SalaryPaymentTypeDocumentTopElem;
  salary_payment_type: SalaryPaymentTypeDocumentTopElem;
};
