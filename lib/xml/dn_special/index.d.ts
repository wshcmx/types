type DnSpecialDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecialDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Факультет */
  facult_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type DnSpecialDocument = XmlDocument & {
  TopElem: DnSpecialDocumentTopElem;
  dn_special: DnSpecialDocumentTopElem;
  DocDesc(): string;
};
