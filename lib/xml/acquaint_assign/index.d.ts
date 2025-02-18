interface AcquaintAssignDocumentQuestion {
  /** Вопрос */
  id: XmlElem<string | null>;
  /** Правильный ответ */
  answer: XmlElem<string | null>;
}

interface AcquaintAssignDocumentView {
  /**
   * @temp
   * Ознакомление
   */
  acquaint_id: XmlElem<number | null>;
  /**
   * @temp
   * Сотрудник
   */
  person_id: XmlElem<number | null>;
}

type AcquaintAssignDocumentTopElem = XmlTopElem & {
  Doc: AcquaintAssignDocument;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default document
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Требуемая дата ознакомления */
  normative_date: XmlElem<Date | null>;
  /** Требуемая дата ознакомления */
  finish_date: XmlElem<Date | null>;
  /**
   * Периодичность повторного обновления в днях
   * @default 0
   */
  reacquaintance_period: XmlElem<number>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Ознакомление */
  acquaint_id: XmlElem<number | null, AcquaintCatalogDocumentTopElem>;
  /**
   * Состояние
   * @default assign
   */
  state_id: XmlElem<string | null, typeof common.acquaint_states>;
  /**
   * Количество попыток
   * @default 0
   */
  attempt_num: XmlElem<number>;
  /** Вопросы */
  questions: XmlMultiElem<AcquaintAssignDocumentQuestion | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<AcquaintAssignDocumentView | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type AcquaintAssignDocument = XmlDocument & {
  TopElem: AcquaintAssignDocumentTopElem;
  acquaint_assign: AcquaintAssignDocumentTopElem;
  DocDesc(): string;
};
