type LibraryMaterialCommentDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: LibraryMaterialCommentDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** @default false */
  is_admin_approved: XmlElem<boolean>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date | null>;
  parent_object_id: XmlElem<number | null, LibraryMaterialCommentCatalogDocumentTopElem>;
  how2show: XmlElem<string | null>;
  last_create_date: XmlElem<Date | null>;
  /** @default false */
  is_closed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type LibraryMaterialCommentDocument = XmlDocument & {
  TopElem: LibraryMaterialCommentDocumentTopElem;
  library_material_comment: LibraryMaterialCommentDocumentTopElem;
  DocDesc(): string;
};
