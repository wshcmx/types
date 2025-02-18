interface LibraryMaterialTypeDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type LibraryMaterialTypeDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LibraryMaterialTypeDocumentView | null>;
};

type LibraryMaterialTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialTypeDocumentTopElem;
  library_material_type: LibraryMaterialTypeDocumentTopElem;
  DocDesc(): string;
};
