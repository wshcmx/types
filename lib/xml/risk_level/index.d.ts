type RiskLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskLevelDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type RiskLevelDocument = XmlDocument & {
  TopElem: RiskLevelDocumentTopElem;
  risk_level: RiskLevelDocumentTopElem;
  DocDesc(): string;
};
