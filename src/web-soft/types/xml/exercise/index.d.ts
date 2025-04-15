interface ExerciseDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ExerciseDocumentTopElem = XmlTopElem & {
  Doc: ExerciseDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  section: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ExerciseDocumentView | null>;
};

type ExerciseDocument = XmlDocument & {
  TopElem: ExerciseDocumentTopElem;
  exercise: ExerciseDocumentTopElem;
  DocDesc(): string;
};
