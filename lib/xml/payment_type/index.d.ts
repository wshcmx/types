type PaymentTypeDocumentTopElem = XmlTopElem & {
  Doc: PaymentTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type PaymentTypeDocument = XmlDocument & {
  TopElem: PaymentTypeDocumentTopElem;
  payment_type: PaymentTypeDocumentTopElem;
  DocDesc(): string;
};
