type BlockMessageCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата последнего сообщения */
  last_message_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.block_message_states>;
  /**
   * Все сообщения прочитаны
   * @default false
   */
  all_message_read: XmlElem<boolean>;
  /**
   * Количество сообщений
   * @default 0
   */
  count_message: XmlElem<number>;
  /**
   * Настройки сообщения неактивны
   * @default false
   */
  disabled_data: XmlElem<boolean>;
  /**
   * Есть ссылки в сообщениях
   * @default true
   */
  has_link: XmlElem<boolean>;
  /**
   * Есть файлы в сообщениях
   * @default true
   */
  has_file: XmlElem<boolean>;
  /** Все адресаты */
  recipient_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Адресаты, непрочитавшие сообщения */
  unread_recipient_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  disp_role_id: XmlMultiElemObject<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
