type ProfilingRecordDocumentTopElem = XmlTopElem & {
  Doc: ProfilingRecordDocument;
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
  doc_info: XmlElem<DocInfoBase | null>;
};

type ProfilingRecordDocument = XmlDocument & {
  TopElem: ProfilingRecordDocumentTopElem;
  profiling_record: ProfilingRecordDocumentTopElem;
  DocDesc(): string;
};
