interface DnAcademDebtDocumentView {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type DnAcademDebtDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAcademDebtDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /**
   * Статус договора
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.academ_debt_states>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  /** Учебная группа */
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  latest_date: XmlElem<Date | null>;
  liquid_date: XmlElem<Date | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DnAcademDebtDocumentView | null>;
};

type DnAcademDebtDocument = XmlDocument & {
  TopElem: DnAcademDebtDocumentTopElem;
  dn_academ_debt: DnAcademDebtDocumentTopElem;
  DocDesc(): string;
};
