type PriceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  state_id: XmlElem<string | null, typeof common.successor_status_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
