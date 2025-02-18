interface OutstaffOrderDocumentPeriodHour {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_hour: XmlElem<number | null>;
  finish_hour: XmlElem<number | null>;
  hour_num: XmlElem<number | null>;
  full_time: XmlElem<boolean | null>;
  /** @default 0 */
  person_num: XmlElem<number>;
}

interface OutstaffOrderDocumentPeriod {
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  hours: XmlMultiElem<OutstaffOrderDocumentPeriodHour | null>;
  sum_person(): number;
  sum_person_hour(): number;
}

interface OutstaffOrderDocumentView extends DescBase {
  last_status: XmlElem<string | null>;
}

type OutstaffOrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /**
   * Статус
   * @default forming
   */
  status: XmlElem<string, typeof common.order_status_types>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Дата оплаты */
  paid_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Провайдер временного персонала */
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  /** Контракт на временный персонал */
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** @default detail */
  period_type: XmlElem<string>;
  periods: XmlMultiElem<OutstaffOrderDocumentPeriod | null>;
  periods_sum_person(): unknown;
  periods_sum_person_hour(): unknown;
  /** Ставка */
  cost_hour: XmlElem<number | null>;
  /** Стоимость */
  cost_sum: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Согласующий */
  agreement_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<OutstaffOrderDocumentView | null>;
  update_periods(): unknown;
};

type OutstaffOrderDocument = XmlDocument & {
  TopElem: OutstaffOrderDocumentTopElem;
  outstaff_order: OutstaffOrderDocumentTopElem;
  OnInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
