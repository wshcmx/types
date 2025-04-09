type ConversationParticipantDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: ConversationParticipantDocument;
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
  /**
   * Timestamp последнего прочитанного сообщения
   * @default 0
   */
  timestamp: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<unknown | null>;
};

type ConversationParticipantDocument = XmlDocument & {
  TopElem: ConversationParticipantDocumentTopElem;
  conversation_participant: ConversationParticipantDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
  OnBeforeSave(): void;
};
