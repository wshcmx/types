type ActiveNotificationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Тип уведомления */
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  /** Прикрепляемый объект */
  object_id: XmlElem<number | null>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата предполагаемой отправки */
  last_send_date: XmlElem<Date | null>;
  /** Дата последней отправки */
  send_date: XmlElem<Date | null>;
  /** Адресаты */
  recipient_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Уведомление заполняется пользователем
   * @default false
   */
  is_custom: XmlElem<boolean>;
  /** Статус */
  status: XmlElem<string | null, typeof common.active_notification_status_types>;
  /**
   * Количество попыток
   * @default 0
   */
  send_counter: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
