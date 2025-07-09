type ActionReportCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.action_report_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.action_status_types>;
  /**
   * Признак завершения
   * @default false
   */
  completed: XmlElem<boolean>;
  /** Сервер */
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Файл */
  data_file_url: XmlElem<string | null>;
  /** Дата загрузки */
  last_upload_date: XmlElem<Date | null>;
  /** Дата */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
