type KeyPositionThreatDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KeyPositionThreatDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Цвет */
  color: XmlElem<string | null>;
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

type KeyPositionThreatDocument = XmlDocument & {
  TopElem: KeyPositionThreatDocumentTopElem;
  key_position_threat: KeyPositionThreatDocumentTopElem;
  DocDesc(): string;
};
