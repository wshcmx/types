interface ArticleDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type ArticleDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: ArticleDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительская статья */
  parent_object_id: XmlElem<number | null, ArticleCatalogDocumentTopElem>;
  /** Справка */
  book_id: XmlElem<number | null, BookCatalogDocumentTopElem>;
  /** Материал библиотеки */
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ArticleDocumentView | null>;
};

type ArticleDocument = XmlDocument & {
  TopElem: ArticleDocumentTopElem;
  article: ArticleDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
