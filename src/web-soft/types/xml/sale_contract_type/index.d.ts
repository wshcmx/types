type SaleContractTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SaleContractTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SaleContractTypeDocument = XmlDocument & {
  TopElem: SaleContractTypeDocumentTopElem;
  sale_contract_type: SaleContractTypeDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
