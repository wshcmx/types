type RegionDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: RegionDocument;
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский регион */
  parent_object_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type RegionDocument = XmlDocument & {
  TopElem: RegionDocumentTopElem;
  region: RegionDocumentTopElem;
  DocDesc(): string;
};
