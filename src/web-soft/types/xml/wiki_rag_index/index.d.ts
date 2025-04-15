type WikiRagIndexDocumentTopElem = XmlTopElem & {
  Doc: WikiRagIndexDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WikiRagIndexDocument = XmlDocument & {
  TopElem: WikiRagIndexDocumentTopElem;
  wiki_rag_index: WikiRagIndexDocumentTopElem;
  DocDesc(): string;
};
