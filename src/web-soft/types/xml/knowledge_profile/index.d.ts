interface KnowledgeProfileDocumentKnowledgePart {
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  /** Целевой уровень */
  target_level_id: XmlElem<string | null>;
  /** Индекс целевого уровня */
  target_level_index: XmlElem<number | null>;
  /** Целевой уровень */
  target_level_name: XmlElem<string | null>;
}

interface KnowledgeProfileDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type KnowledgeProfileDocumentTopElem = XmlTopElem & {
  Doc: KnowledgeProfileDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlMultiElem<KnowledgeProfileDocumentKnowledgePart | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<KnowledgeProfileDocumentView | null>;
};

type KnowledgeProfileDocument = XmlDocument & {
  TopElem: KnowledgeProfileDocumentTopElem;
  knowledge_profile: KnowledgeProfileDocumentTopElem;
  DocDesc(): string;
};
