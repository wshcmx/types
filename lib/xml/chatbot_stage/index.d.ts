interface ChatbotStageDocumentSendTextLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEvalGenerateKeyboardLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_code_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage extends MsCodeLibraryCondition {
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
  unknow_command_text_library: XmlElem<ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStageUnknowCommandTextLibrary | null>;
}

interface ChatbotStageDocumentUnknowCommandChatbotStage {
  unknow_command_chatbot_stages: XmlMultiElem<ChatbotStageDocumentUnknowCommandChatbotStageUnknowCommandChatbotStage | null>;
}

interface ChatbotStageDocumentInlineKeyboard extends MsCodeLibraryCondition, ObjectTypeBase {
  id: XmlElem<string | null>;
  text: XmlElem<string | null>;
  callback_data: XmlElem<string | null>;
  /** @default false */
  next_row: XmlElem<boolean | null>;
  url: XmlElem<string | null>;
  rows: XmlElem<number | null>;
  columns: XmlElem<number | null>;
  /**
   * Тип кнопки
   * @default usual
   */
  button_type_id: XmlElem<string | null, typeof common.chatbot_button_types>;
  /** Действия кнопки */
  action_type_id: XmlElem<string | null, typeof common.chatbot_action_types>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
  params_block: XmlElem<WebVariablesBase | null>;
}

interface ChatbotStageDocumentKeyboard extends MsCodeLibraryCondition {
  id: XmlElem<string | null>;
  text: XmlElem<string | null>;
  /** @default false */
  request_contact: XmlElem<boolean | null>;
  /** @default false */
  request_location: XmlElem<boolean | null>;
  /** @default false */
  next_row: XmlElem<boolean | null>;
  rows: XmlElem<number | null>;
  columns: XmlElem<number | null>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
}

interface ChatbotStageDocumentCommandEvalLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_code_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentCommandCommandActionLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentCommand extends MsCodeLibraryCondition {
  id: XmlElem<string | null>;
  /** @default false */
  is_inline_keyboard: XmlElem<boolean | null>;
  /** Название */
  name: XmlElem<string | null>;
  inline_keyboard_id: XmlElem<string | null>;
  condition_eval: XmlElem<string | null>;
  /** Этап чат-бота */
  chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  command_action: XmlElem<string | null>;
  command_action_library: XmlElem<ChatbotStageDocumentCommandCommandActionLibrary | null>;
}

interface ChatbotStageDocumentEscalationEscalationStageEscalationCommandTextLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_text_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalationEscalationStageEscalationActionLibrary extends MsCodeLibraryConditionBase {
  /** Тип выполняемого кода */
  eval_code_type: XmlElem<string | null, typeof common.eval_code_types>;
  /** Модель классификации */
  classification_model_id: XmlElem<number | null, ClassificationModelCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalationEscalationStage extends MsCodeLibraryCondition {
  id: XmlElem<string | null>;
  /**
   * Время эскалации (часов)
   * @default 0
   */
  escalation_hour: XmlElem<number | null>;
  /** Сообщение эскалации */
  escalation_command_text: XmlElem<string | null>;
  /**
   * Исполняемый код в сообщении эскалации
   * @default false
   */
  is_eval_escalation_command: XmlElem<boolean | null>;
  condition_eval: XmlElem<string | null>;
  /** @default false */
  is_inline_keyboard: XmlElem<boolean | null>;
  inline_keyboard_id: XmlElem<string | null>;
  escalation_command_text_library: XmlElem<ChatbotStageDocumentEscalationEscalationStageEscalationCommandTextLibrary | null>;
  escalation_action: XmlElem<string | null>;
  escalation_action_library: XmlElem<ChatbotStageDocumentEscalationEscalationStageEscalationActionLibrary | null>;
  /** Этап чат-бота */
  chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
}

interface ChatbotStageDocumentEscalation {
  escalation_stages: XmlMultiElem<ChatbotStageDocumentEscalationEscalationStage | null>;
}

interface ChatbotStageDocumentTileBlockTileButtonsBlockButton extends ObjectTypeBase {
  id: XmlElem<string | null>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /**
   * Тип кнопки
   * @default usual
   */
  button_type_id: XmlElem<string | null, typeof common.chatbot_button_types>;
  /** Расположение кнопки */
  type: XmlElem<string | null>;
  /** Действия кнопки */
  action_type_id: XmlElem<string | null, typeof common.chatbot_action_types>;
  /** Url */
  url: XmlElem<string | null>;
  callback_data: XmlElem<string | null>;
  params_block: XmlElem<WebVariablesBase | null>;
}

interface ChatbotStageDocumentTileBlockTileButtonsBlock {
  buttons: XmlMultiElem<ChatbotStageDocumentTileBlockTileButtonsBlockButton | null>;
}

interface ChatbotStageDocumentTileBlockTile {
  id: XmlElem<string | null>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Иконка тайла */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Иконка тайла */
  icon_url: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Тип тайла
   * @default object
   */
  type_id: XmlElem<string | null, typeof common.chatbot_tile_types>;
  /** Описание */
  mandatory_desc: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  buttons_block: XmlElem<ChatbotStageDocumentTileBlockTileButtonsBlock | null>;
}

interface ChatbotStageDocumentTileBlock {
  tiles: XmlMultiElem<ChatbotStageDocumentTileBlockTile | null>;
}

interface ChatbotStageDocumentViewReplyMessageDataFiles {
  /** @temp */
  id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** @temp */
  type: XmlElem<string | null>;
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  url: XmlElem<string | null>;
}

interface ChatbotStageDocumentViewReplyMessageDataSender {
  /** @temp */
  id: XmlElem<number | null>;
  /** @temp */
  icon_url: XmlElem<string | null>;
  /** @temp */
  type: XmlElem<string | null>;
  /** @temp */
  disp_name: XmlElem<string | null>;
  /** @temp */
  lastname: XmlElem<string | null>;
  /** @temp */
  firstname: XmlElem<string | null>;
}

interface ChatbotStageDocumentViewReplyMessageData {
  /** @temp */
  state: XmlElem<string | null>;
  /** @temp */
  message_id: XmlElem<string | null>;
  /** @temp */
  create_date: XmlElem<Date | null>;
  /** @temp */
  block_message_id: XmlElem<number | null, BlockMessageCatalogDocumentTopElem>;
  /** @temp */
  message_text: XmlElem<string | null>;
  /** @temp */
  files: XmlMultiElemObject<ChatbotStageDocumentViewReplyMessageDataFiles | null>;
  /** @temp */
  sender: XmlElem<ChatbotStageDocumentViewReplyMessageDataSender | null>;
}

interface ChatbotStageDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /** @temp */
  object_param_id: XmlElem<number | null>;
  /** @temp */
  base_object_type: XmlElem<string | null>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** @temp */
  info_data: XmlElem<string | null>;
  /** @temp */
  reply_message_data: XmlElem<ChatbotStageDocumentViewReplyMessageData | null>;
}

type ChatbotStageDocumentTopElem = XmlTopElem &
MsParametersBase & {
  Doc: ChatbotStageDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  /** @default true */
  is_use_universal_commands: XmlElem<boolean | null>;
  /** @default true */
  is_write_message: XmlElem<boolean | null>;
  send_text: XmlElem<string | null>;
  send_text_library: XmlElem<ChatbotStageDocumentSendTextLibrary | null>;
  /** @default standart */
  action_type: XmlElem<string | null>;
  /** @default false */
  is_eval_send_text: XmlElem<boolean | null>;
  custom_chatbot_template_id: XmlElem<number | null, CustomChatbotTemplateCatalogDocumentTopElem>;
  /** @default not_keyboard */
  keyboard_type: XmlElem<string | null, typeof common.keyboard_types>;
  /** @default false */
  is_eval_generate_keyboard: XmlElem<boolean | null>;
  eval_generate_keyboard: XmlElem<string | null>;
  eval_generate_keyboard_library: XmlElem<ChatbotStageDocumentEvalGenerateKeyboardLibrary | null>;
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
  unknow_command_text_library: XmlElem<ChatbotStageDocumentUnknowCommandTextLibrary | null>;
  /** Этап на который переводить при неизвестной команде */
  unknow_command_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /** Обработка неизвестных команд по условиям */
  unknow_command_chatbot_stage: XmlElem<ChatbotStageDocumentUnknowCommandChatbotStage | null>;
  inline_keyboards: XmlMultiElem<ChatbotStageDocumentInlineKeyboard | null>;
  keyboards: XmlMultiElem<ChatbotStageDocumentKeyboard | null>;
  command_eval_str: XmlElem<string | null>;
  command_eval_library: XmlElem<ChatbotStageDocumentCommandEvalLibrary | null>;
  commands: XmlMultiElem<ChatbotStageDocumentCommand | null>;
  /** Эскалация */
  escalation: XmlElem<ChatbotStageDocumentEscalation | null>;
  /** Тайлы */
  tile_block: XmlElem<ChatbotStageDocumentTileBlock | null>;
  /** Этап чат-бота для автоматического перенаправления после отработки этапа */
  auto_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ChatbotStageDocumentView | null>;
};

type ChatbotStageDocument = XmlDocument & {
  TopElem: ChatbotStageDocumentTopElem;
  chatbot_stage: ChatbotStageDocumentTopElem;
  DocDesc(): string;
};
