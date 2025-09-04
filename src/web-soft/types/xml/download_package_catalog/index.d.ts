type DownloadPackageCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Скачанный пакет данных */
  package_id: XmlElem<string | null>;
  /** Сервер */
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  /** Тип пакета */
  type: XmlElem<string | null, typeof common.package_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.package_status_types>;
  /** Дата */
  package_date: XmlElem<Date | null>;
  /** Дата объекта */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
