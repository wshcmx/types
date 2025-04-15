interface ClShapeDocumentParams {
  type: XmlElem<string | null>;
  stroked: XmlElem<string | null>;
  filled: XmlElem<string | null>;
  coordsize: XmlElem<string | null>;
  adj: XmlElem<string | null>;
  path: XmlElem<string | null>;
}

interface ClShapeDocumentFormula {
  expr: XmlElem<string | null>;
}

interface ClShapeDocumentHandle {
  position: XmlElem<string | null>;
  xrange: XmlElem<string | null>;
  yrange: XmlElem<string | null>;
}

interface ClShapeDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  ico_url: XmlElem<string | null>;
}

type ClShapeDocumentTopElem = XmlTopElem & {
  Doc: ClShapeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Папка */
  category: XmlElem<string | null>;
  /** Категория */
  category_label: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Расшифровка типа */
  type_name: XmlElem<string | null>;
  params: XmlElem<ClShapeDocumentParams | null>;
  formulas: XmlMultiElem<ClShapeDocumentFormula | null>;
  textboxrect: XmlElem<string | null>;
  otherxml: XmlElem<string | null>;
  handles: XmlMultiElem<ClShapeDocumentHandle | null>;
  ico: XmlElem<Binary | null>;
  vml: XmlElem<string | null>;
  /** Комментарий */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ClShapeDocumentView | null>;
};

type ClShapeDocument = XmlDocument & {
  TopElem: ClShapeDocumentTopElem;
  cl_shape: ClShapeDocumentTopElem;
  DocDesc(): string;
};
