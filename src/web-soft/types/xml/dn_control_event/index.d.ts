interface DnControlEventDocumentControlAssessm {
  assessm_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface DnControlEventDocumentParticipant {
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
}

interface DnControlEventDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnControlEventDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnControlEventDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата */
  date_event: XmlElem<Date | null>;
  /** @default plan */
  status_id: XmlElem<string | null, typeof common.lesson_states>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  lesson_id: XmlElem<number | null, DnLessonCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Тесты */
  control_assessms: XmlMultiElem<DnControlEventDocumentControlAssessm | null>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  /** Участники */
  participants: XmlMultiElem<DnControlEventDocumentParticipant | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnControlEventDocumentView | null>;
};

type DnControlEventDocument = XmlDocument & {
  TopElem: DnControlEventDocumentTopElem;
  dn_control_event: DnControlEventDocumentTopElem;
  DocDesc(): string;
};
