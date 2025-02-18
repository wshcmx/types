type PotentialGradeDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: PotentialGradeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Оценка потенциала */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Источник оценки */
  assessment_source: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Преемник */
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  /** Резервист */
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  /** Оценивающий */
  assessor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата оценки */
  assessment_date: XmlElem<Date | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type PotentialGradeDocument = XmlDocument & {
  TopElem: PotentialGradeDocumentTopElem;
  potential_grade: PotentialGradeDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
