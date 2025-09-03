type DnIndEducatPlanCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  /** Форма итогового контроля */
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /**
   * Тип
   * @default paper
   */
  is_course_work: XmlElem<string, typeof common.work_types>;
  theme_course_work: XmlElem<string | null>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
