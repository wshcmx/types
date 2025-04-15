interface ReprimandDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ReprimandDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ReprimandDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип взыскания */
  reprimand_type_id: XmlElem<number | null, ReprimandTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ReprimandDocumentView | null>;
};

type ReprimandDocument = XmlDocument & {
  TopElem: ReprimandDocumentTopElem;
  reprimand: ReprimandDocumentTopElem;
  DocDesc(): string;
};
