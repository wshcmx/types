type ReprimandTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
