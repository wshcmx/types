type WageSystemDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WageSystemDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type WageSystemDocument = XmlDocument & {
  TopElem: WageSystemDocumentTopElem;
  wage_system: WageSystemDocumentTopElem;
  DocDesc(): string;
};
