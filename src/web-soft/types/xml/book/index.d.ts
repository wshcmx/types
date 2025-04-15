interface BookDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type BookDocumentTopElem = XmlTopElem &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: BookDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Раздел библиотеки */
  library_section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<BookDocumentView | null>;
};

type BookDocument = XmlDocument & {
  TopElem: BookDocumentTopElem;
  book: BookDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
