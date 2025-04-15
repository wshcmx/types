interface KnowledgeClassifierDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type KnowledgeClassifierDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KnowledgeClassifierDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<KnowledgeClassifierDocumentView | null>;
};

type KnowledgeClassifierDocument = XmlDocument & {
  TopElem: KnowledgeClassifierDocumentTopElem;
  knowledge_classifier: KnowledgeClassifierDocumentTopElem;
  DocDesc(): string;
};
