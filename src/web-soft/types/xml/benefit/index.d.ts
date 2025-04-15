type BenefitDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BenefitDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type BenefitDocument = XmlDocument & {
  TopElem: BenefitDocumentTopElem;
  benefit: BenefitDocumentTopElem;
  DocDesc(): string;
};
