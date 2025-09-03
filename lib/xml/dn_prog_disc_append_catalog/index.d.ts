type DnProgDiscAppendCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  program_discipline_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  /** Специализация */
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<string | null>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
