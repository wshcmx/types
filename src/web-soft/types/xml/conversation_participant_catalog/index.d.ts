type ConversationParticipantCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /**
   * Помечен непрочитанным
   * @default false
   */
  is_marked: XmlElem<boolean>;
  /**
   * Кастомный участник
   * @default false
   */
  is_custom: XmlElem<boolean>;
  /**
   * Закрепленный разговор
   * @default false
   */
  is_pinned: XmlElem<boolean>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Статус */
  conversation_state: XmlElem<string | null>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Timestamp последнего прочитанного сообщения */
  timestamp: XmlElem<number | null>;
  OnBuild(): void;
};
