type KeyPositionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Код сотрудника */
  person_code: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Уровень риска */
  risk_perspective_id: XmlElem<number | null, RiskPerspectiveCatalogDocumentTopElem>;
  /** Степени риска */
  risk_levels: XmlElem<string | null>;
  /** Угроза ключевой должности */
  key_position_threat_id: XmlElem<number | null, KeyPositionThreatCatalogDocumentTopElem>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default plan
   */
  status: XmlElem<string, typeof common.key_position_status_types>;
  /**
   * Доступна для преемников с любой должности
   * @default true
   */
  is_open: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
