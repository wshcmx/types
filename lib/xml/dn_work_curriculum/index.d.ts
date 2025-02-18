interface DnWorkCurriculumDocumentBlockElemDisciplineTerm {
  id_term: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  term_hours: XmlElem<number | null>;
}

interface DnWorkCurriculumDocumentBlockElemDiscipline {
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  loading(): number;
  auditor: XmlElem<number | null>;
  independ: XmlElem<number | null>;
  load_credit(): number;
  audit_credit: XmlElem<number | null>;
  independ_credit: XmlElem<number | null>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  name_control_form: XmlElem<string | null>;
  /** @default false */
  is_choice: XmlElem<boolean | null>;
  terms: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDisciplineTerm | null>;
}

interface DnWorkCurriculumDocumentBlockElem {
  id_block: XmlElem<number | null, DnBlockDisciplineCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  load_block(): number;
  all_auditor(): number;
  all_independ(): number;
  load_cred_block(): number;
  all_cred_auditor(): number;
  all_cred_indep(): number;
  disciplines: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDiscipline | null>;
}

interface DnWorkCurriculumDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
}

type DnWorkCurriculumDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnWorkCurriculumDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус договора
   * @default project
   */
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  block_elems: XmlMultiElem<DnWorkCurriculumDocumentBlockElem | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnWorkCurriculumDocumentView | null>;
};

type DnWorkCurriculumDocument = XmlDocument & {
  TopElem: DnWorkCurriculumDocumentTopElem;
  dn_work_curriculum: DnWorkCurriculumDocumentTopElem;
  DocDesc(): string;
};
