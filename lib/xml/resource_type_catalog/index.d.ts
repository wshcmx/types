type ResourceTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};
