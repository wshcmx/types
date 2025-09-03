type DnRegisterStudentCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Ведомость */
  register_id: XmlElem<number | null, DnRegisterCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Дисциплина */
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date | null>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /** Студент */
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  /** Имя сотрудника */
  person_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
