type WorkScheduleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: WorkScheduleDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type WorkScheduleDocument = XmlDocument & {
  TopElem: WorkScheduleDocumentTopElem;
  work_schedule: WorkScheduleDocumentTopElem;
  DocDesc(): string;
};
