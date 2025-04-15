interface DnSubjectPlanDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnSubjectPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnSubjectPlanDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Тема */
  subject: XmlElem<string | null>;
  program_discipline_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  /** Приложение к программе дисциплины */
  prog_disc_append_id: XmlElem<number | null, DnProgDiscAppendCatalogDocumentTopElem>;
  /** Форма проведения */
  educat_event_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnSubjectPlanDocumentView | null>;
};

type DnSubjectPlanDocument = XmlDocument & {
  TopElem: DnSubjectPlanDocumentTopElem;
  dn_subject_plan: DnSubjectPlanDocumentTopElem;
  DocDesc(): string;
};
