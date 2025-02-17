type ChatbotChatCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  last_message_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  bot_id: XmlElem<string | null>;
  /** Этап чат-бота */
  chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /** Тип чат-бота */
  chatbot_type_id: XmlElem<number | null, ChatbotTypeCatalogDocumentTopElem>;
  /** Чат-бот */
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.conversation_participant_states>;
  /** Время продолжения */
  prolongation_date: XmlElem<Date | null>;
  /** Действие эскалации */
  escalation_action: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Использовать эскалацию */
  use_escalation: XmlElem<boolean | null>;
  /** Дата эскалации */
  escalation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
