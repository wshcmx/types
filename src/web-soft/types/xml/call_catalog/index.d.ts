type CallCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Создатель звонка */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Планируемая дата начала */
  plan_start_date: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  plan_end_date: XmlElem<Date | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.event_status_types>;
  /** Активные участники */
  active_participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Все участники */
  participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Все входившие участники */
  entered_participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Все входившие участники */
  missed_unread_participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  OnBuild(): void;
};
