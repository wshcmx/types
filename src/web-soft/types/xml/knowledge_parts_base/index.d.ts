type KnowledgePartsBaseDocumentTopElem = XmlTopElem &
KnowledgePartsBase & {
  Doc: KnowledgePartsBaseDocument;
};

type KnowledgePartsBaseDocument = XmlDocument & {
  TopElem: KnowledgePartsBaseDocumentTopElem;
  knowledge_parts_base: KnowledgePartsBaseDocumentTopElem;
};
