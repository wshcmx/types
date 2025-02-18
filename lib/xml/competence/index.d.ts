interface CompetenceDocumentExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
}

interface CompetenceDocumentView extends DescBase {
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

type CompetenceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CompetenceScaleBase &
CompetenceLevelBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: CompetenceDocument;
  /** Блок */
  competence_block_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  /** Упражнения */
  exercises: XmlMultiElem<CompetenceDocumentExercise | null>;
  /** Позитивное проявление */
  positive_comment: XmlElem<string | null>;
  /** Негативное проявление */
  negative_comment: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<CompetenceDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CompetenceDocument = XmlDocument & {
  TopElem: CompetenceDocumentTopElem;
  competence: CompetenceDocumentTopElem;
  DocDesc(): string;
};
