type StatementAttachmentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** ID использования */
  usage_type: XmlElem<string | null>;
  /** Тип содержимого */
  content_type: XmlElem<string | null>;
  /** Длина данных */
  length: XmlElem<string | null>;
  /** Хэш данных */
  file_hash: XmlElem<string | null>;
  /** Адрес данных */
  file_url: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
