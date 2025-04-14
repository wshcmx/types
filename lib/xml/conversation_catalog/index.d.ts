type ConversationCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Создатель разговора */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип разговора */
  conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  /**
   * Формат разговора
   * @default chat
   */
  format_id: XmlElem<string | null, typeof common.conversation_formats>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.account_status_types>;
  /** Настраиваемый статус */
  custom_state_id: XmlElem<string | null>;
  /**
   * Публичный разговор
   * @default false
   */
  is_public: XmlElem<boolean>;
  /** Приоритет позиции в списке */
  position_priority: XmlElem<number | null>;
  /** Дополнительный стиль в списке */
  list_css: XmlElem<string | null>;
  /** Объекты */
  objects: XmlMultiElemObject<number | null>;
  /**
   * Тип объекта
   * @default chat
   */
  active_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  active_object_name: XmlElem<string | null>;
  /** Активный участник */
  active_object_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Все участники */
  participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
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
  /** @default true */
  update_participant: XmlElem<boolean | null>;
  OnBuild(): void;
};
