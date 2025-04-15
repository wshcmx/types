type AcquaintAssignCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Требуемая дата ознакомления */
  normative_date: XmlElem<Date | null>;
  /** Дата ознакомления */
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
   * @default 0
   */
  state_id: XmlElem<string | null, typeof common.acquaint_states>;
  /**
   * Количество попыток
   * @default 0
   */
  attempt_num: XmlElem<number>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
