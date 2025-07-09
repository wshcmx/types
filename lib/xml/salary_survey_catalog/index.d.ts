type SalarySurveyCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Минимальная зарплата */
  min_salary: XmlElem<number | null>;
  /** Максимальная зарплата */
  max_salary: XmlElem<number | null>;
  /** Средняя зарплата */
  avg_salary: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Уровень должности */
  position_level_id: XmlElem<number | null, PositionLevelCatalogDocumentTopElem>;
  /** Источник обзоров зарплат */
  salary_survey_source_id: XmlElem<number | null, SalarySurveySourceCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
