type ConversationTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
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
  /**
   * Использовать скрипт открытия разговора
   * @default false
   */
  use_open_script: XmlElem<boolean | null>;
  /**
   * Использовать скрипт получения URL с дополнительной информацией
   * @default false
   */
  use_additional_info_script: XmlElem<boolean | null>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
