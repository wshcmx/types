type PersonnelEventDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelEventDocument;
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус события
   * @default plan
   */
  event_status: XmlElem<string>;
  /** Тип кадрового события */
  personnel_event_type_id: XmlElem<number | null, PersonnelEventTypeCatalogDocumentTopElem>;
  /** Дата создания события */
  creation_date: XmlElem<Date | null>;
  /** Дата обработки события */
  date_processed: XmlElem<Date | null>;
  /** Дата отмены */
  date_cancel: XmlElem<Date | null>;
  /** Дата удаления */
  date_delete: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof lists.person_states>;
  /** Дата завершения работы в должности */
  dismiss_date: XmlElem<Date | null>;
  /** Дата начала отсутствия */
  absence_start_date: XmlElem<Date | null>;
  /** Дата окончания отсутствия */
  absence_finish_date: XmlElem<Date | null>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  subdivision_name: XmlElem<string | null>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Дата расформирования */
  disbanded_date: XmlElem<Date | null>;
  /** Позиция штатного расписания */
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Дата утверждения */
  start_date: XmlElem<Date | null>;
  /** Количество штатных единиц */
  staff_num: XmlElem<number | null>;
  /** Дата закрытия */
  finish_date: XmlElem<Date | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Код должности */
  position_code: XmlElem<string | null>;
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Тип назначения */
  position_appointment_type_id: XmlElem<number | null, AppointmentTypeCatalogDocumentTopElem>;
  /** Ставка */
  basic_rate: XmlElem<number | null>;
  /** Код целевой должности */
  move_position_code: XmlElem<string | null>;
  /** Название целевой должности */
  move_position_name: XmlElem<string | null>;
  /** Тип назначения целевой должности */
  move_position_appointment_type_id: XmlElem<number | null, AppointmentTypeCatalogDocumentTopElem>;
  /** Ставка */
  move_position_basic_rate: XmlElem<number | null>;
  /** Целевая позиция штатного расписания */
  move_staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Целевая типовая должность */
  move_position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Дата перемещения */
  move_date: XmlElem<Date | null>;
  /** Целевое подразделение */
  move_subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Нормативный документ */
  document: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PersonnelEventDocument = XmlDocument & {
  TopElem: PersonnelEventDocumentTopElem;
  personnel_event: PersonnelEventDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
