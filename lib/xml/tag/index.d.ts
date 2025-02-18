interface TagDocumentExpert {
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
}

type TagDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: TagDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Требует подтверждения эксперта
   * @default false
   */
  require_acknowledgement: XmlElem<boolean>;
  /** Значение карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  experts: XmlMultiElem<TagDocumentExpert | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type TagDocument = XmlDocument & {
  TopElem: TagDocumentTopElem;
  tag: TagDocumentTopElem;
  DocDesc(): string;
};
