type VclassSettingCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
