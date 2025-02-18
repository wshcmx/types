type ActionReportDocumentTopElem = XmlTopElem & {
  Doc: ActionReportDocument;
  /** Тип */
  type: XmlElem<string | null, typeof common.action_report_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.action_status_types>;
  /**
   * Признак завершения
   * @default false
   */
  completed: XmlElem<boolean>;
  /** @default false */
  finished: XmlElem<boolean>;
  /** Сервер */
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Дата загрузки */
  last_upload_date: XmlElem<Date | null>;
  /** Сообщение */
  report_text: XmlElem<string | null>;
  /** Файл */
  data_file_url: XmlElem<string | null>;
  server_version: XmlElem<string | null>;
  report_json: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActionReportDocument = XmlDocument & {
  TopElem: ActionReportDocumentTopElem;
  action_report: ActionReportDocumentTopElem;
  DocDesc(): string;
};
