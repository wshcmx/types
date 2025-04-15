type DnProgDiscAppendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgDiscAppendDocument;
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
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnProgDiscAppendDocument = XmlDocument & {
  TopElem: DnProgDiscAppendDocumentTopElem;
  dn_prog_disc_append: DnProgDiscAppendDocumentTopElem;
  DocDesc(): string;
};
