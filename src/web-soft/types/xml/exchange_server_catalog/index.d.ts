type ExchangeServerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Сервер зарегистрирован
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Дата последней отправки */
  last_upload_date: XmlElem<Date | null>;
  /** Дата последнего приема данных */
  last_download_date: XmlElem<Date | null>;
  /** Версия сервера при приеме данных */
  server_version: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
