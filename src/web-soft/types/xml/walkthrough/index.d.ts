interface WalkthroughDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type WalkthroughDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: WalkthroughDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Внешняя система */
  external_system_id: XmlElem<number | null, ExternalSystemCatalogDocumentTopElem>;
  xml: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<WalkthroughDocumentView | null>;
};

type WalkthroughDocument = XmlDocument & {
  TopElem: WalkthroughDocumentTopElem;
  walkthrough: WalkthroughDocumentTopElem;
  DocDesc(): string;
};
