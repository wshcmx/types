interface ChatbotChatDocumentMessage {
  id: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Текст сообщения */
  text: XmlElem<string | null>;
  /** Предыдущий этап чат-бота */
  last_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /** Следующий этап чат-бота */
  next_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotChatDocumentTempValue {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface ChatbotChatDocumentAimlData {
  custom_chatbot_template_id: XmlElem<number | null, CustomChatbotTemplateCatalogDocumentTopElem>;
  data: XmlElem<string | null>;
}

interface ChatbotChatDocumentEscalationWorkedEscalationStage {
  escalation_id: XmlElem<string | null>;
}

interface ChatbotChatDocumentEscalation {
  /** Дата начала отсчета */
  start_date: XmlElem<Date | null>;
  /** Дата эскалации */
  escalation_date: XmlElem<Date | null>;
  /** Использовать эскалацию */
  use_escalation: XmlElem<boolean | null>;
  /** Отработанные сценарии эскалации */
  worked_escalation_stages: XmlMultiElem<ChatbotChatDocumentEscalationWorkedEscalationStage | null>;
}

type ChatbotChatDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: ChatbotChatDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  bot_id: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
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
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null, LngCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Json объект для хранения временных данных */
  json_string: XmlElem<string | null>;
  /** Время продолжения */
  prolongation_date: XmlElem<Date | null>;
  /** Действие эскалации */
  escalation_action: XmlElem<string | null>;
  /** Сообщения */
  messages: XmlMultiElem<ChatbotChatDocumentMessage | null>;
  temp_values: XmlMultiElem<ChatbotChatDocumentTempValue | null>;
  /** AIML */
  aiml_datas: XmlMultiElem<ChatbotChatDocumentAimlData | null>;
  /** Эскалация */
  escalation: XmlElem<ChatbotChatDocumentEscalation | null>;
  last_message_id: XmlElem<string | null>;
  /** Данные последнего сообщения пользователя в блоке */
  last_bm_message: XmlElem<BmMessage | null>;
  last_message_xml: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  calculate_escalation_date(stageTopElem: XmlTopElem): unknown;
};

type ChatbotChatDocument = XmlDocument & {
  TopElem: ChatbotChatDocumentTopElem;
  chatbot_chat: ChatbotChatDocumentTopElem;
  DocDesc(): string;
};
