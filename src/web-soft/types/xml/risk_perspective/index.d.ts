type RiskPerspectiveDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskPerspectiveDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type RiskPerspectiveDocument = XmlDocument & {
  TopElem: RiskPerspectiveDocumentTopElem;
  risk_perspective: RiskPerspectiveDocumentTopElem;
  DocDesc(): string;
};
