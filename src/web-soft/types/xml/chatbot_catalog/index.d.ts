type ChatbotCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Начальный этап чат-бота */
  start_chatbot_stage_id: XmlElem<number | null, ChatbotStageCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  /** Отображаемое название */
  disp_name: XmlElem<string | null>;
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /**
   * Возможно создавать чат
   * @default false
   */
  can_create_conversation: XmlElem<boolean>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Тип используемого разговора
   * @default chatbot
   */
  usage_object_type: XmlElem<string | null, typeof common.usage_object_types>;
  /**
   * Отправлять уведомления об операциях
   * @default true
   */
  send_operation_message: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  create_date: XmlElem<Date | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
