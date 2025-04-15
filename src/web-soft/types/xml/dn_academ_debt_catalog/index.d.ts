type DnAcademDebtCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /**
   * Статус договора
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.academ_debt_states>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /** Учебная группа */
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  latest_date: XmlElem<Date | null>;
  liquid_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
