type WikiArticleTypeDocumentTopElem = XmlTopElem & {
  Doc: WikiArticleTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type WikiArticleTypeDocument = XmlDocument & {
  TopElem: WikiArticleTypeDocumentTopElem;
  wiki_article_type: WikiArticleTypeDocumentTopElem;
  DocDesc(): string;
};
