type ChatCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Персональный чат */
  is_personal: XmlElem<boolean | null>;
  /**
   * Многопользовательский чат
   * @default false
   */
  is_multiplayer: XmlElem<boolean>;
  /** Участники */
  collaborators: XmlElem<string | null>;
  participant_ids: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
