interface CovenantDocumentEducationMethodIdSd {
  name: XmlElem<string | null>;
}

interface CovenantDocumentEducationMethodId {
  sd: XmlElem<CovenantDocumentEducationMethodIdSd | null>;
}

interface CovenantDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type CovenantDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CovenantDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Подписант со стороны работодателя */
  signatory_employer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Дата закрытия */
  close_date: XmlElem<Date | null>;
  /** Срок отработки (в днях) */
  period_work: XmlElem<number | null>;
  /** Условия оплаты банком */
  proc_pay_bank: XmlElem<number | null>;
  /** Условия оплаты сотрудником */
  proc_pay_collab: XmlElem<number | null>;
  sum_pay_bank(): number | null;
  sum_pay_collab(): number | null;
  /** Процент удержания */
  proc_deduct: XmlElem<number | null>;
  /** Учебная программа */
  education_method_id: XmlElem<CovenantDocumentEducationMethodId | null, EducationMethodCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Место проведения */
  place: XmlElem<string | null>;
  /** Цель */
  comment: XmlElem<string | null>;
  /** Статус договора */
  status_id: XmlElem<string | null, typeof common.covenant_status_types>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<CovenantDocumentView | null>;
};

type CovenantDocument = XmlDocument & {
  TopElem: CovenantDocumentTopElem;
  covenant: CovenantDocumentTopElem;
  DocDesc(): string;
};
