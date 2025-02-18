type SalarySurveyDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SalarySurveyDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
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
  /** Минимальная зарплата */
  min_salary: XmlElem<number | null>;
  /** Максимальная зарплата */
  max_salary: XmlElem<number | null>;
  /** Средняя зарплата */
  avg_salary: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SalarySurveyDocument = XmlDocument & {
  TopElem: SalarySurveyDocumentTopElem;
  salary_survey: SalarySurveyDocumentTopElem;
  DocDesc(): string;
};
