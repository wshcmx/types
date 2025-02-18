type BenefitItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitItemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.benefit_item_statuses>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Тип привилегий */
  benefit_id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type BenefitItemDocument = XmlDocument & {
  TopElem: BenefitItemDocumentTopElem;
  benefit_item: BenefitItemDocumentTopElem;
  DocDesc(): string;
};
