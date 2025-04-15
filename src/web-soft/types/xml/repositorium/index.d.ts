interface RepositoriumDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type RepositoriumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RepositoriumDocument;
  /** Родительский объект */
  parent_object_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  /** Авторы */
  authors: XmlMultiElem<RepositoriumDocumentAuthor | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type RepositoriumDocument = XmlDocument & {
  TopElem: RepositoriumDocumentTopElem;
  repositorium: RepositoriumDocumentTopElem;
  DocDesc(): string;
};
