type ExclusionReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExclusionReasonDocument;
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

type ExclusionReasonDocument = XmlDocument & {
  TopElem: ExclusionReasonDocumentTopElem;
  exclusion_reason: ExclusionReasonDocumentTopElem;
  DocDesc(): string;
};
