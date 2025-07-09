type DnAcademYearCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  start_year: XmlElem<string | null>;
  end_year: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  amount_week_autumnal_term: XmlElem<number | null>;
  amount_week_spring_term: XmlElem<number | null>;
  str_years: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
