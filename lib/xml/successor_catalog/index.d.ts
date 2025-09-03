type SuccessorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ключевая должность */
  key_position_id: XmlElem<number | null, KeyPositionCatalogDocumentTopElem>;
  /** Сотрудник */
  key_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник на ключевой должности */
  key_person_fullname: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Преемник */
  person_fullname: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position_name: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Уровень готовности */
  readiness_level_id: XmlElem<number | null, ReadinessLevelCatalogDocumentTopElem>;
  /** Потенциал развития */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.successor_status_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
