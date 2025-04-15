interface LibraryMaterialFormatDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type LibraryMaterialFormatDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialFormatDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default physical
   */
  format_type_id: XmlElem<string | null, typeof common.material_format_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LibraryMaterialFormatDocumentView | null>;
};

type LibraryMaterialFormatDocument = XmlDocument & {
  TopElem: LibraryMaterialFormatDocumentTopElem;
  library_material_format: LibraryMaterialFormatDocumentTopElem;
  DocDesc(): string;
};
