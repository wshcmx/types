type StaffPositionFinishDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionFinishDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  subdivision_name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Позиция штатного рассписания */
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Дата завершения работы в должности */
  position_finish_date: XmlElem<Date | null>;
  /** Нормативный документ */
  document: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionFinishDocument = XmlDocument & {
  TopElem: StaffPositionFinishDocumentTopElem;
  staff_position_finish: StaffPositionFinishDocumentTopElem;
  DocDesc(): string;
};
