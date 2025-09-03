type UploadPackageCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** ID пакета */
  code: XmlElem<string | null>;
  /** Тип пакета */
  type: XmlElem<string | null, typeof common.package_types>;
  /** Файл пакета */
  file_url: XmlElem<string | null>;
  /** Дата пакета */
  package_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
