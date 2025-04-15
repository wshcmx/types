type AppointmentTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: AppointmentTypeDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type AppointmentTypeDocument = XmlDocument & {
  TopElem: AppointmentTypeDocumentTopElem;
  appointment_type: AppointmentTypeDocumentTopElem;
  DocDesc(): string;
};
