type DnLessonCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Кафедра */
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Дисциплина */
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  lesson_date: XmlElem<Date | null>;
  /** Статус договора */
  status_id: XmlElem<string | null, typeof common.lesson_states>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  educat_event_form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  /** Аудитория */
  auditorium_id: XmlElem<number | null, DnAuditoriumCatalogDocumentTopElem>;
  /** Поток */
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
