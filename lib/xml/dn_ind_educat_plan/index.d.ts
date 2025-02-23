interface DnIndEducatPlanDocumentContrlTermEvent {
  event_id: XmlElem<string | null>;
  /** Тема */
  theme_id: XmlElem<number | null, DnSubjectPlanCatalogDocumentTopElem>;
  /** Дата */
  period: XmlElem<Date | null>;
  /** Вид контрольного мероприятия */
  kind_term_event: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /** Форма проведения */
  form_term_event: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  /** Количество баллов (мин.) */
  mark_min: XmlElem<number | null>;
  /** Количество баллов (макс.) */
  mark_max: XmlElem<number | null>;
}

interface DnIndEducatPlanDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnIndEducatPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnIndEducatPlanDocument;
  /** Код */
  code: XmlElem<string | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  /** Форма итогового контроля */
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /** Тип */
  is_course_work: XmlElem<string | null, typeof common.work_types>;
  theme_course_work: XmlElem<string | null>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  contrl_term_events: XmlMultiElem<DnIndEducatPlanDocumentContrlTermEvent | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnIndEducatPlanDocumentView | null>;
};

type DnIndEducatPlanDocument = XmlDocument & {
  TopElem: DnIndEducatPlanDocumentTopElem;
  dn_ind_educat_plan: DnIndEducatPlanDocumentTopElem;
  DocDesc(): string;
};
