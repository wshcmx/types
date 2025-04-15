interface DnScheduleDocumentScheduleElem {
  elem_id: XmlElem<string | null>;
  week_day_id: XmlElem<number | null, typeof common.week_days>;
  /** Время */
  time: XmlElem<string | null>;
  periodic_type_id: XmlElem<string | null, typeof common.periodicity_types>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  edu_event_form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /** Учебная группа */
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  auditor_id: XmlElem<number | null, DnAuditoriumCatalogDocumentTopElem>;
}

interface DnScheduleDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnScheduleDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnScheduleDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  schedule_elems: XmlMultiElem<DnScheduleDocumentScheduleElem | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnScheduleDocumentView | null>;
};

type DnScheduleDocument = XmlDocument & {
  TopElem: DnScheduleDocumentTopElem;
  dn_schedule: DnScheduleDocumentTopElem;
  DocDesc(): string;
};
