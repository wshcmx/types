type MaterialLiabilityDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: MaterialLiabilityDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type MaterialLiabilityDocument = XmlDocument & {
  TopElem: MaterialLiabilityDocumentTopElem;
  material_liability: MaterialLiabilityDocumentTopElem;
  DocDesc(): string;
};
