interface OutstaffOrderExecutionDocumentStage extends CostCurrencyBase, CustomElemsBase {
  id: XmlElem<string | null>;
  /** Родительский этап */
  parent_stage_id: XmlElem<string | null>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник */
  provider_person_fullname: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Дата */
  fact_date: XmlElem<Date | null>;
  /** @default 0 */
  hour_num: XmlElem<number>;
  /** @default 0 */
  hours_worked: XmlElem<number>;
  /**
   * Присутствие
   * @default false
   */
  is_assist: XmlElem<boolean>;
  /** Статус */
  outstaff_order_execution_status_type: XmlElem<string | null, typeof common.outstaff_order_execution_status_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type OutstaffOrderExecutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderExecutionDocument;
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
  /** ФИО ответственного */
  collaborator_fullname: XmlElem<string | null>;
  /** Провайдер временного персонала */
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  /** Контракт на временный персонал */
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Контракт на временный персонал */
  outstaff_contract_name: XmlElem<string | null>;
  /** Заказ на временный персонал */
  outstaff_order_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_name: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_name: XmlElem<string | null>;
  /** @default 0 */
  stage_num: XmlElem<number>;
  stages: XmlMultiElem<OutstaffOrderExecutionDocumentStage | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  update_stages(): unknown;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type OutstaffOrderExecutionDocument = XmlDocument & {
  TopElem: OutstaffOrderExecutionDocumentTopElem;
  outstaff_order_execution: OutstaffOrderExecutionDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
