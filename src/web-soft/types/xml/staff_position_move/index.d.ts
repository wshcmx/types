type StaffPositionMoveDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionMoveDocument;
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
  /** Подразделение */
  move_subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Должность */
  move_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Позиция штатного рассписания */
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Позиция штатного рассписания */
  move_staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Дата перемещения */
  move_date: XmlElem<Date | null>;
  /** Нормативный документ */
  document: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionMoveDocument = XmlDocument & {
  TopElem: StaffPositionMoveDocumentTopElem;
  staff_position_move: StaffPositionMoveDocumentTopElem;
  DocDesc(): string;
};
