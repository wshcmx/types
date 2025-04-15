type ContractStateDocumentTopElem = XmlTopElem & {
  Doc: ContractStateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ContractStateDocument = XmlDocument & {
  TopElem: ContractStateDocumentTopElem;
  contract_state: ContractStateDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
