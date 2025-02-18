interface DevelopmentMethodDocumentDevelopmentObject {
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface DevelopmentMethodDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type DevelopmentMethodDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DevelopmentMethodDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  development_objects: XmlMultiElem<DevelopmentMethodDocumentDevelopmentObject | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DevelopmentMethodDocumentView | null>;
};

type DevelopmentMethodDocument = XmlDocument & {
  TopElem: DevelopmentMethodDocumentTopElem;
  development_method: DevelopmentMethodDocumentTopElem;
  DocDesc(): string;
};
