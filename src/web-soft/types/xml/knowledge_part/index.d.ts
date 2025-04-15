interface KnowledgePartDocumentLevel extends MsConfirmationBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Уровень экспертизы
   * @default false
   */
  expertise_level: XmlElem<boolean>;
  /**
   * Тип подтверждения
   * @default none
   */
  confirmation_type: XmlElem<string>;
}

interface KnowledgePartDocumentTempDoc {
  /** @temp */
  id: XmlElem<number | null>;
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  object_type: XmlElem<string | null>;
  /** @temp */
  object_type_name: XmlElem<string | null>;
}

interface KnowledgePartDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  catalog_type: XmlElem<string | null>;
  /**
   * @temp
   * @default false
   */
  sel_all_objects: XmlElem<boolean>;
}

type KnowledgePartDocumentTopElem = XmlTopElem &
MsConfirmationBase &
CatalogListBase &
FileListBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: KnowledgePartDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Родительское значение */
  parent_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  /**
   * Тип подтверждения
   * @default none
   */
  confirmation_type: XmlElem<string>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /**
   * Требует подтверждения эксперта
   * @default false
   */
  require_acknowledgement: XmlElem<boolean>;
  /** Уровни */
  levels: XmlMultiElem<KnowledgePartDocumentLevel | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  temp_docs: XmlMultiElem<KnowledgePartDocumentTempDoc | null>;
  knowledge_part_type_id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<KnowledgePartDocumentView | null>;
};

type KnowledgePartDocument = XmlDocument & {
  TopElem: KnowledgePartDocumentTopElem;
  knowledge_part: KnowledgePartDocumentTopElem;
  DocDesc(): string;
};
