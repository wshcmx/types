interface DnControlFormDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type DnControlFormDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnControlFormDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnControlFormDocumentView | null>;
};

type DnControlFormDocument = XmlDocument & {
  TopElem: DnControlFormDocumentTopElem;
  dn_control_form: DnControlFormDocumentTopElem;
  DocDesc(): string;
};
