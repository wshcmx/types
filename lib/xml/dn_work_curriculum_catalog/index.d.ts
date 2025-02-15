type DnWorkCurriculumCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус договора
   * @default active
   */
  status_id: XmlElem<string | null, typeof common.prog_discipl_states>;
  /**
   * Тип
   * @default general
   */
  type: XmlElem<string, typeof common.curriculum_types>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number | null, DnEducatFormCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
