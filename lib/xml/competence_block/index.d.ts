interface CompetenceBlockDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type CompetenceBlockDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceBlockDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительский блок компетенций */
  parent_object_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<CompetenceBlockDocumentView | null>;
};

type CompetenceBlockDocument = XmlDocument & {
  TopElem: CompetenceBlockDocumentTopElem;
  competence_block: CompetenceBlockDocumentTopElem;
  DocDesc(): string;
};
