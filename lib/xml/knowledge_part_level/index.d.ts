type KnowledgePartLevelDocumentTopElem = XmlTopElem & {
  Doc: KnowledgePartLevelDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KnowledgePartLevelDocument = XmlDocument & {
  TopElem: KnowledgePartLevelDocumentTopElem;
  knowledge_part_level: KnowledgePartLevelDocumentTopElem;
};
