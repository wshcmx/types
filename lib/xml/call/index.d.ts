interface CallDocumentParticipant {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.conversation_participant_states>;
  /** @default false */
  has_entered: XmlElem<boolean | null>;
  type: XmlElem<string | null>;
}

type CallDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: CallDocument;
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
  /** Участники звонка */
  participants: XmlMultiElem<CallDocumentParticipant | null>;
  /**
   * Разрешить записывать
   * @default false
   */
  allow_write: XmlElem<boolean>;
  /**
   * Разрешить расшифровывать
   * @default false
   */
  allow_recognition: XmlElem<boolean>;
  /**
   * Разрешить автоматическое формирование резюме
   * @default false
   */
  allow_summary: XmlElem<boolean>;
  /** Все входившие участники */
  entered_participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type CallDocument = XmlDocument & {
  TopElem: CallDocumentTopElem;
  call: CallDocumentTopElem;
};
