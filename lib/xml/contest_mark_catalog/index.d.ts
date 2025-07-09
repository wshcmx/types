type ContestMarkCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Конкурс */
  contest_id: XmlElem<number | null, ContestCatalogDocumentTopElem>;
  /** Название конкурса */
  contest_name: XmlElem<string | null>;
  participant_id: XmlElem<number | null, ParticipantCatalogDocumentTopElem>;
  /** Оцениваемый */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оцениваемого */
  person_fullname: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_name: XmlElem<string | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.participant_states>;
  /** Оценка */
  general_mark: XmlElem<string | null>;
  /** Оценивающий */
  judge_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  value: XmlElem<string | null>;
  /** Итоговый рейтинг */
  rating: XmlElem<number | null>;
  /** Занятое место */
  place: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
