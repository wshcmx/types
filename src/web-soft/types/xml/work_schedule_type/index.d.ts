type WorkScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: WorkScheduleTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkScheduleTypeDocument = XmlDocument & {
  TopElem: WorkScheduleTypeDocumentTopElem;
  work_schedule_type: WorkScheduleTypeDocumentTopElem;
};
