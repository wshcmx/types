type ScaleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ограничение */
  max_limit: XmlElem<number | null>;
  /** Ограничение */
  min_limit: XmlElem<number | null>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.kpi_states>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
