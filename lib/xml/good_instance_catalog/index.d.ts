type GoodInstanceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус
   * @default in_stock
   */
  status: XmlElem<string, typeof common.good_instance_status_types>;
  /** Товар */
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  /** Дата резервирования */
  reserved_date: XmlElem<Date | null>;
  /** Дата оплаты */
  paid_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
