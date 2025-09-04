interface DnLessonDocumentStudGroup {
  /** Учебная группа */
  group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
}

interface DnLessonDocumentStudWork {
  work_id: XmlElem<string | null>;
  /** Студент */
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  work_state_id: XmlElem<string | null, typeof common.stud_work_states>;
  work_date: XmlElem<Date | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
}

interface DnLessonDocumentRegistrStudent {
  /** Студент */
  stud_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  /** @default false */
  is_presence: XmlElem<boolean | null>;
  /** Оценка */
  mark: XmlElem<number | null>;
  /** Комментарий преподавателя */
  lector_comment: XmlElem<string | null>;
}

interface DnLessonDocumentStudent {
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
}

interface DnLessonDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnLessonDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnLessonDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Кафедра */
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Дисциплина */
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  /** Дата */
  lesson_date: XmlElem<Date | null>;
  /**
   * Статус договора
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.lesson_states>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  educat_event_form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  /** Аудитория */
  auditorium_id: XmlElem<number | null, DnAuditoriumCatalogDocumentTopElem>;
  /** Поток */
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /** Учебные группы */
  stud_groups: XmlMultiElem<DnLessonDocumentStudGroup | null>;
  deliv_date: XmlElem<Date | null>;
  stud_works: XmlMultiElem<DnLessonDocumentStudWork | null>;
  registr_students: XmlMultiElem<DnLessonDocumentRegistrStudent | null>;
  students: XmlMultiElem<DnLessonDocumentStudent | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnLessonDocumentView | null>;
};

type DnLessonDocument = XmlDocument & {
  TopElem: DnLessonDocumentTopElem;
  dn_lesson: DnLessonDocumentTopElem;
  DocDesc(): string;
};
