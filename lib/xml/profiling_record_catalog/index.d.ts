type ProfilingRecordCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  ticks: XmlElem<number | null>;
  url: XmlElem<string | null>;
  sid: XmlElem<string | null>;
  duration: XmlElem<number | null>;
  /** @default custom_web_template */
  template_type: XmlElem<string | null>;
  template_id: XmlElem<number | null>;
  /** @default custom_web_template */
  parent_template_type: XmlElem<string | null>;
  parent_template_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
