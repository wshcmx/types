interface LearningPartDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /**
   * @temp
   * @default result
   */
  result_tab_selector: XmlElem<string>;
}

type LearningPartDocumentTopElem = XmlTopElem &
CoreLessonBase &
AnnalsObjectsBase & {
  Doc: LearningPartDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название раздела */
  name: XmlElem<string | null>;
  learning_id: XmlElem<number | null>;
  /** Об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LearningPartDocumentView | null>;
};

type LearningPartDocument = XmlDocument & {
  TopElem: LearningPartDocumentTopElem;
  learning_part: LearningPartDocumentTopElem;
  DocDesc(): string;
};
