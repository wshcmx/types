type PersonalChatCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Мероприятие */
  chat_id: XmlElem<number | null, ChatCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  confirmed: XmlElem<boolean | null>;
  prohibited: XmlElem<boolean | null>;
  partner_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  partner_fullname: XmlElem<string | null>;
  partner_confirmed: XmlElem<boolean | null>;
  partner_prohibited: XmlElem<boolean | null>;
  last_message_date: XmlElem<Date | null>;
  last_view_date: XmlElem<Date | null>;
  last_message_text: XmlElem<string | null>;
  last_message_sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
