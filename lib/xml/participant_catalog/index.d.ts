type ParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название работы */
  work_name: XmlElem<string | null>;
  /** Конкурс */
  contest_id: XmlElem<number | null, ContestCatalogDocumentTopElem>;
  /** Название конкурса */
  contest_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Итоговый рейтинг */
  rating: XmlElem<number | null>;
  /** Занятое место */
  place: XmlElem<number | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.participant_states>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
