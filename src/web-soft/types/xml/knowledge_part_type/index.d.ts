type KnowledgePartTypeDocumentTopElem = XmlTopElem & {
  Doc: KnowledgePartTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KnowledgePartTypeDocument = XmlDocument & {
  TopElem: KnowledgePartTypeDocumentTopElem;
  knowledge_part_type: KnowledgePartTypeDocumentTopElem;
};
