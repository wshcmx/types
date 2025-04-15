type EfficiencyGradeDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: EfficiencyGradeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
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
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type EfficiencyGradeDocument = XmlDocument & {
  TopElem: EfficiencyGradeDocumentTopElem;
  efficiency_grade: EfficiencyGradeDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
