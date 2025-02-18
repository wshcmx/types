type ResourceTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ResourceTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ResourceTypeDocument = XmlDocument & {
  TopElem: ResourceTypeDocumentTopElem;
  resource_type: ResourceTypeDocumentTopElem;
  DocDesc(): string;
};
