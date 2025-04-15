type StaffPositionStartDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionStartDocument;
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
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /** Нормативный документ */
  document: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionStartDocument = XmlDocument & {
  TopElem: StaffPositionStartDocumentTopElem;
  staff_position_start: StaffPositionStartDocumentTopElem;
  DocDesc(): string;
};
