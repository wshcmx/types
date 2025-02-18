interface ActiveNotificationDocumentSender {
  address: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ActiveNotificationDocumentAttachment {
  cid: XmlElem<string | null>;
  name: XmlElem<string | null>;
  data: XmlElem<Binary | null>;
}

interface ActiveNotificationDocumentRecipient {
  /** Адрес */
  address: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  /** Имя */
  name: XmlElem<string | null>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ActiveNotificationDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ActiveNotificationDocumentTopElem = XmlTopElem & {
  Doc: ActiveNotificationDocument;
  /** Тип уведомления */
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  /** Прикрепляемый документ */
  object_id: XmlElem<number | null>;
  /** Прикрепляемый документ */
  sec_object_id: XmlElem<number | null>;
  /** Текст */
  text: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата последней отправки */
  last_send_date: XmlElem<Date | null>;
  /** Дата отправки */
  send_date: XmlElem<Date | null>;
  /**
   * Уведомление заполняется пользователем
   * @default false
   */
  is_custom: XmlElem<boolean>;
  /**
   * Статус
   * @default create
   */
  status: XmlElem<string, typeof common.active_notification_status_types>;
  /**
   * Количество попыток
   * @default 0
   */
  send_counter: XmlElem<number | null>;
  sender: XmlElem<ActiveNotificationDocumentSender | null>;
  date: XmlElem<Date | null>;
  /** Тема */
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  /**
   * Формат сообщения
   * @default plane
   */
  body_type: XmlElem<string | null>;
  attachments: XmlMultiElem<ActiveNotificationDocumentAttachment | null>;
  /** Адресаты */
  recipients: XmlMultiElem<ActiveNotificationDocumentRecipient | null>;
  /** Система уведомлений */
  notification_system_id: XmlElem<number | null, NotificationSystemCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ActiveNotificationDocumentView | null>;
};

type ActiveNotificationDocument = XmlDocument & {
  TopElem: ActiveNotificationDocumentTopElem;
  active_notification: ActiveNotificationDocumentTopElem;
  DocDesc(): string;
};
