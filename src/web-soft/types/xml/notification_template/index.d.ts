interface NotificationTemplateDocumentMainObject extends FieldNamesBase {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  init_field_names(): unknown;
}

type NotificationTemplateDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: NotificationTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тема */
  subject: XmlElem<string | null>;
  /** Сообщение */
  body: XmlElem<string | null>;
  /**
   * Формат сообщения
   * @default plane
   */
  body_type: XmlElem<string | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  main_object: XmlElem<NotificationTemplateDocumentMainObject | null>;
  add_text_to_edit(screen: Object, text: string, field: Date): unknown;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type NotificationTemplateDocument = XmlDocument & {
  TopElem: NotificationTemplateDocumentTopElem;
  notification_template: NotificationTemplateDocumentTopElem;
  DocDesc(): string;
};
