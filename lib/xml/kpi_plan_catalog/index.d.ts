type KpiPlanCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** КПЭ */
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Ответственный */
  responsible_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Минимальное значение */
  threshold: XmlElem<string | null>;
  /** Минимальное значение (текст) */
  threshold_text: XmlElem<string | null>;
  /** Минимальное значение (число) */
  threshold_value: XmlElem<number | null>;
  /** Максимальное значение */
  challenge: XmlElem<string | null>;
  /** Максимальное значение (текст) */
  challenge_text: XmlElem<string | null>;
  /** Максимальное значение (число) */
  challenge_value: XmlElem<number | null>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  /** Плановая величина (текст) */
  plan_text: XmlElem<string | null>;
  /** Плановая величина (число) */
  plan_value: XmlElem<number | null>;
  /** Каталог объектов */
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** ID объекта */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Эксперты */
  expert_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
