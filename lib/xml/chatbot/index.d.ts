interface ChatbotDocumentChatbotType {
  bot_id: XmlElem<string | null>;
  chatbot_type_id: XmlElem<number | null, ChatbotTypeCatalogDocumentTopElem>;
  /** Webhook */
  webhook_url: XmlElem<string | null>;
  host_id: XmlElem<number | null, HostCatalogDocumentTopElem>;
  chatbot_code: XmlElem<string | null>;
}

interface ChatbotDocumentCommandEvalLibrary extends MsCodeLibraryConditionBase {
  /**
   * Тип выполняемого кода
   * @default code_library
   */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  /**
   * Тип выполняемого кода
   * @default code_library
   */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUniversalCommand extends MsCodeLibraryCondition {
  id: XmlElem<string | null>;
  /** @default false */
  is_inline_keyboard: XmlElem<boolean | null>;
  /** Название */
  name: XmlElem<string | null>;
  inline_keyboard_id: XmlElem<string | null>;
  condition_eval: XmlElem<string | null>;
  /** Этап чат-бота */
  chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  /**
   * Тип выполняемого кода
   * @default code_library
   */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage extends MsCodeLibraryCondition {
  id: XmlElem<string | null>;
  condition_eval: XmlElem<string | null>;
  /** Сообщение при поступлении неизвестной команды */
  unknow_command_text: XmlElem<string | null>;
  /**
   * Отправлять сообщении при поступлении неизвестной команды до отработки универсальных команд чат-бота
   * @default true
   */
  is_send_before_standart_command: XmlElem<boolean | null>;
  /**
   * Исполняемый код в сообщении при поступлении неизвестной команды
   * @default false
   */
  is_eval_unknow_command: XmlElem<boolean | null>;
  /** Этап чат-бота */
  unknow_command_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_text_library: XmlElem<ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary | null>;
}

interface ChatbotDocumentUnknowCommandChatbotStage {
  unknow_command_chatbot_stages: XmlMultiElem<ChatbotDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage | null>;
}

interface ChatbotDocumentRegularEvalLibrary extends MsCodeLibraryConditionBase {
  /**
   * Тип выполняемого кода
   * @default code_library
   */
  eval_code_type: XmlElem<string | null, typeof common.eval_code_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotDocumentView extends DescBase {
  chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
}

type ChatbotDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase & {
  Doc: ChatbotDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Отображаемое название */
  disp_name: XmlElem<string | null>;
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Начальный этап чат-бота */
  start_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /**
   * Возможно создавать чат
   * @default false
   */
  can_create_conversation: XmlElem<boolean>;
  /**
   * Тип используемого разговора
   * @default chatbot
   */
  usage_object_type: XmlElem<string | null, typeof common.usage_object_types>;
  chatbot_types: XmlMultiElem<ChatbotDocumentChatbotType | null>;
  command_eval_str: XmlElem<string | null>;
  command_eval_library: XmlElem<ChatbotDocumentCommandEvalLibrary | null>;
  /** Сообщение при поступлении неизвестной команды */
  unknow_command_text: XmlElem<string | null>;
  /**
   * Исполняемый код в сообщении при поступлении неизвестной команды
   * @default false
   */
  is_eval_unknow_command: XmlElem<boolean | null>;
  /** Этап на который переводить при неизвестной команде */
  unknow_command_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  unknow_command_text_library: XmlElem<ChatbotDocumentUnknowCommandTextLibrary | null>;
  universal_commands: XmlMultiElem<ChatbotDocumentUniversalCommand | null>;
  /** Обработка неизвестных команд по условиям */
  unknow_command_chatbot_stage: XmlElem<ChatbotDocumentUnknowCommandChatbotStage | null>;
  regular_eval_str: XmlElem<string | null>;
  regular_eval_library: XmlElem<ChatbotDocumentRegularEvalLibrary | null>;
  /**
   * Записывать сообщения в чат
   * @default true
   */
  write_to_messages: XmlElem<boolean | null>;
  /**
   * Включить логирование
   * @default false
   */
  logged: XmlElem<boolean | null>;
  /**
   * Отправлять уведомления об операциях
   * @default true
   */
  send_operation_message: XmlElem<boolean | null>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<ChatbotDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type ChatbotDocument = XmlDocument & {
  TopElem: ChatbotDocumentTopElem;
  chatbot: ChatbotDocumentTopElem;
  DocDesc(): string;
};
