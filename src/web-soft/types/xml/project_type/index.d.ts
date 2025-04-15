type ProjectTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProjectTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ProjectTypeDocument = XmlDocument & {
  TopElem: ProjectTypeDocumentTopElem;
  project_type: ProjectTypeDocumentTopElem;
  DocDesc(): string;
};
