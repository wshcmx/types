interface DnProgramDisciplDocumentTermPlanTheme {
  id_subj: XmlElem<number | null>;
  /** Тема */
  theme: XmlElem<string | null>;
  number_week: XmlElem<string | null>;
  hours_audit: XmlElem<number | null>;
  hours_independ: XmlElem<number | null>;
  /** Форма проведения */
  educat_event_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  name_educat_event: XmlElem<string | null>;
}

interface DnProgramDisciplDocumentTerm {
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  laboriousn_all_term: XmlElem<number | null>;
  laboriousn_audit_term(): number;
  laboriousn_indep_term(): number;
  plan_themes: XmlMultiElem<DnProgramDisciplDocumentTermPlanTheme | null>;
}

interface DnProgramDisciplDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSubject {
  subject_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecialSpecialization {
  specializat_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecial {
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specializations: XmlMultiElem<DnProgramDisciplDocumentSpecialSpecialization | null>;
}

interface DnProgramDisciplDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnProgramDisciplDocumentTopElem = XmlTopElem &
LectorsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgramDisciplDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус договора
   * @default project
   */
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number | null, DnEducatFormCatalogDocumentTopElem>;
  control_form: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  all_laboriousn_audit: XmlElem<number | null>;
  all_laboriousn_indep: XmlElem<number | null>;
  terms: XmlMultiElem<DnProgramDisciplDocumentTerm | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnProgramDisciplDocumentDiscipline | null>;
  subjects: XmlMultiElem<DnProgramDisciplDocumentSubject | null>;
  specials: XmlMultiElem<DnProgramDisciplDocumentSpecial | null>;
  /** @temp */
  view: XmlElem<DnProgramDisciplDocumentView | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnProgramDisciplDocument = XmlDocument & {
  TopElem: DnProgramDisciplDocumentTopElem;
  dn_program_discipl: DnProgramDisciplDocumentTopElem;
  DocDesc(): string;
};
