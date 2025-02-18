interface PollResultDocumentQuestion {
  id: XmlElem<number | null>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  read_only: XmlElem<boolean | null>;
}

interface PollResultDocumentViewObjectObject {
  /** @temp */
  object_id: XmlElem<number | null>;
}

interface PollResultDocumentViewObject {
  /** @temp */
  question_id: XmlElem<number | null>;
  /** @temp */
  object_id: XmlElem<number | null>;
  /** @temp */
  objects: XmlMultiElem<PollResultDocumentViewObjectObject | null>;
}

interface PollResultDocumentView {
  /** @temp */
  objects: XmlMultiElem<PollResultDocumentViewObject | null>;
}

type PollResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollResultDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Процедура опроса */
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Заполнена
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  save_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default 0
   */
  status: XmlElem<number>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Вопросы */
  questions: XmlMultiElem<PollResultDocumentQuestion | null>;
  last_item_id: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<PollResultDocumentView | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  update_name(): string;
};

type PollResultDocument = XmlDocument & {
  TopElem: PollResultDocumentTopElem;
  poll_result: PollResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
