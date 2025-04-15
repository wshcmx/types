type NotificationSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase & {
  Doc: NotificationSystemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type NotificationSystemDocument = XmlDocument & {
  TopElem: NotificationSystemDocumentTopElem;
  notification_system: NotificationSystemDocumentTopElem;
  DocDesc(): string;
};
