type DownloadPackageDocumentTopElem = XmlTopElem &
DownloadPackageLogBase & {
  Doc: DownloadPackageDocument;
  /** ID пакета */
  package_id: XmlElem<string | null>;
  /** Сервер */
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  /** Тип пакета */
  type: XmlElem<string | null, typeof common.package_types>;
  base_url: XmlElem<string | null>;
  /** Адрес скачивания */
  url: XmlElem<string | null>;
  /**
   * Статус пакета
   * @default init
   */
  status: XmlElem<string, typeof common.package_status_types>;
  /** Файл пакета */
  local_file_url: XmlElem<string | null>;
  /** Дата объекта */
  create_date: XmlElem<Date | null>;
  /** Дата скачивания */
  download_date: XmlElem<Date | null>;
  /** Дата пакета */
  package_date: XmlElem<Date | null>;
  application_code: XmlElem<string | null>;
  /** Приложение */
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DownloadPackageDocument = XmlDocument & {
  TopElem: DownloadPackageDocumentTopElem;
  download_package: DownloadPackageDocumentTopElem;
  DocDesc(): string;
};
