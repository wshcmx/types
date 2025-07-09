type PersonalChatCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Мероприятие */
  chat_id: XmlElem<number | null, ChatCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /**
   * Подтвердил
   * @default false
   */
  confirmed: XmlElem<boolean | null>;
  /**
   * Запретил общение
   * @default false
   */
  prohibited: XmlElem<boolean | null>;
  /** Собеседник */
  partner_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  partner_fullname: XmlElem<string | null>;
  /**
   * Собеседник подтвердил общение
   * @default false
   */
  partner_confirmed: XmlElem<boolean | null>;
  /**
   * Собеседник запретил общение
   * @default false
   */
  partner_prohibited: XmlElem<boolean | null>;
  /** Дата последнего сообщения */
  last_message_date: XmlElem<Date | null>;
  /** Дата последнего посещ. */
  last_view_date: XmlElem<Date | null>;
  /** Последнее сообщение */
  last_message_text: XmlElem<string | null>;
  /** Отправитель последнего сообщения */
  last_message_sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
