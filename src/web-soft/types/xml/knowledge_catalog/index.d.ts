type KnowledgeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null, KnowledgeCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  /** Родительское значение */
  parent_object_id: XmlElem<number | null>;
  /** Тип родительского объекта */
  parent_catalog: XmlElem<string | null>;
  /** Есть эксперты */
  has_experts: XmlElem<boolean | null>;
  OnBuild(): void;
  MatchDoc(): unknown;
};
