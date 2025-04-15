interface DnRegisterDocumentStudentMark {
  stud_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  mark_id: XmlElem<string | null, typeof common.type_marks>;
  mark_name: XmlElem<string | null>;
}

interface DnRegisterDocumentViewStudentMark {
  stud_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
}

interface DnRegisterDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** @temp */
  student_marks: XmlMultiElem<DnRegisterDocumentViewStudentMark | null>;
}

type DnRegisterDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnRegisterDocument;
  /** Код */
  code: XmlElem<string | null>;
  control_event_id: XmlElem<number | null, DnControlEventCatalogDocumentTopElem>;
  /**
   * Тип
   * @default ordinary
   */
  type_id: XmlElem<string, typeof common.registr_types>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /** Дата */
  date_event: XmlElem<Date | null>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /** Учебная группа */
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  student_marks: XmlMultiElem<DnRegisterDocumentStudentMark | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnRegisterDocumentView | null>;
};

type DnRegisterDocument = XmlDocument & {
  TopElem: DnRegisterDocumentTopElem;
  dn_register: DnRegisterDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
