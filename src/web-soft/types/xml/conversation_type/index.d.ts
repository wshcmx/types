interface ConversationTypeDocumentDispRole {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
}

interface ConversationTypeDocumentCustomState {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
}

type ConversationTypeDocumentTopElem = XmlTopElem &
FuncManagersBase & {
  Doc: ConversationTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип отображения сотрудников для участников разговора
   * @default participant
   */
  visible_type_id: XmlElem<string | null, typeof common.conversation_visible_types>;
  disp_roles: XmlMultiElem<ConversationTypeDocumentDispRole | null>;
  custom_states: XmlMultiElem<ConversationTypeDocumentCustomState | null>;
  /**
   * Писать по умолчанию запрещено
   * @default false
   */
  prohibit_write: XmlElem<boolean>;
  /**
   * Разрешить звонки
   * @default false
   */
  can_call: XmlElem<boolean>;
  /**
   * Разрешить изменение состава участников
   * @default true
   */
  can_change_participant: XmlElem<boolean>;
  /**
   * Разрешить отображение дополнительной информации для всех
   * @default false
   */
  can_show_additional_info: XmlElem<boolean>;
  /**
   * Панель дополнительной информации по умолчанию открыта
   * @default false
   */
  open_additional_info: XmlElem<boolean>;
  /** Подключать чат-бот при создании */
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  open_script: XmlElem<string | null>;
  additional_info_script: XmlElem<string | null>;
  additional_info_script_url: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ConversationTypeDocument = XmlDocument & {
  TopElem: ConversationTypeDocumentTopElem;
  conversation_type: ConversationTypeDocumentTopElem;
};
