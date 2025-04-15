type RestrictingCollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: RestrictingCollaboratorScheduleDocument;
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Тип ограничения */
  restriction_type_id: XmlElem<number | null, RestrictingTypeCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RestrictingCollaboratorScheduleDocument = XmlDocument & {
  TopElem: RestrictingCollaboratorScheduleDocumentTopElem;
  restricting_collaborator_schedule: RestrictingCollaboratorScheduleDocumentTopElem;
};
