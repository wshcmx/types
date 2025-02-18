interface LearningTaskDocumentExpert extends PersonFillingBase {
  id: XmlElem<string | null>;
  /** Эксперт курса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface LearningTaskDocumentViewDuration {
  /**
   * @temp
   * @default 0
   */
  hour: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  minute: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  second: XmlElem<number | null>;
}

interface LearningTaskDocumentView extends DescBase {
  /**
   * @temp
   * Продолжительность выполнения
   */
  duration: XmlElem<LearningTaskDocumentViewDuration | null>;
}

type LearningTaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsKpBase & {
  Doc: LearningTaskDocument;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Разрешить самостоятельное назначение
   * @default true
   */
  yourself_start: XmlElem<boolean>;
  /**
   * Использовать в мероприятиях
   * @default false
   */
  use_in_event: XmlElem<boolean>;
  /** Продолжительность выполнения */
  duration: XmlElem<number | null>;
  experts: XmlMultiElem<LearningTaskDocumentExpert | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<LearningTaskDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type LearningTaskDocument = XmlDocument & {
  TopElem: LearningTaskDocumentTopElem;
  learning_task: LearningTaskDocumentTopElem;
  DocDesc(): string;
};
