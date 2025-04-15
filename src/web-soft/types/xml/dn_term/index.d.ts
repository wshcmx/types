type DnTermDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnTermDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  str_term: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnTermDocument = XmlDocument & {
  TopElem: DnTermDocumentTopElem;
  dn_term: DnTermDocumentTopElem;
  DocDesc(): string;
};
