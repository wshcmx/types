type PolicyDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: PolicyDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Тип полиса */
  policy_type_id: XmlElem<number | null, PolicyTypeCatalogDocumentTopElem>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string, typeof common.budget_state_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PolicyDocument = XmlDocument & {
  TopElem: PolicyDocumentTopElem;
  policy: PolicyDocumentTopElem;
};
