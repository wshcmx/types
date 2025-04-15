type KnowledgePartsSectionDocumentTopElem = XmlTopElem &
KnowledgePartsBase &
KnowledgePartsBaseOld & {
  Doc: KnowledgePartsSectionDocument;
};

type KnowledgePartsSectionDocument = XmlDocument & {
  TopElem: KnowledgePartsSectionDocumentTopElem;
  knowledge_parts_section: KnowledgePartsSectionDocumentTopElem;
};
