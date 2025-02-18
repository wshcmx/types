interface IndicatorDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /**
   * @temp
   * Классификатор
   */
  knowledge_classifier_id: XmlElem<number | null>;
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
}

type IndicatorDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CompetenceScaleBase &
CompetenceLevelBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: IndicatorDocument;
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /**
   * Тип
   * @default 0
   */
  type: XmlElem<number, typeof common.indicator_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Позитивное проявление */
  positive_comment: XmlElem<string | null>;
  /** Негативное проявление */
  negative_comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<IndicatorDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type IndicatorDocument = XmlDocument & {
  TopElem: IndicatorDocumentTopElem;
  indicator: IndicatorDocumentTopElem;
  DocDesc(): string;
};
