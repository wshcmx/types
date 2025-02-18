type OutstaffOrderExecutionStageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  outstaff_order_execution_id: XmlElem<number | null, OutstaffOrderExecutionCatalogDocumentTopElem>;
  /**
   * Статус
   * @default forming
   */
  status: XmlElem<string, typeof common.order_status_types>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Провайдер временного персонала */
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  /** Контракт на временный персонал */
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Заказ на временный персонал */
  outstaff_order_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Этап */
  stage_id: XmlElem<string | null>;
  /** Родительский этап */
  stage_parent_id: XmlElem<string | null>;
  /** Сотрудник */
  stage_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата */
  stage_date: XmlElem<Date | null>;
  /** Дата */
  stage_fact_date: XmlElem<Date | null>;
  stage_hour_num: XmlElem<number | null>;
  stage_hours_worked: XmlElem<number | null>;
  /**
   * Присутствие
   * @default false
   */
  stage_is_assist: XmlElem<boolean>;
  /** Статус */
  stage_status_type: XmlElem<string | null, typeof common.outstaff_order_execution_status_types>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
