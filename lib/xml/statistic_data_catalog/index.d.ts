type StatisticDataCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Показатель */
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<number | null>;
  /** Строковое значение */
  value_str: XmlElem<string | null>;
  /** Значение в виде даты */
  value_date: XmlElem<Date | null>;
  /** Дата */
  statistic_date: XmlElem<Date | null>;
  /** Дополнительная информация */
  additinal_info: XmlElem<string | null>;
  /** Тип периода */
  period_type: XmlElem<string | null, typeof common.perioditys>;
  /** Минуты */
  period_minute: XmlElem<number | null>;
  /** Часы */
  period_hour: XmlElem<number | null>;
  /** День */
  period_day: XmlElem<number | null>;
  /** Месяц */
  period_month: XmlElem<number | null>;
  /** Квартал */
  period_quarter: XmlElem<number | null>;
  /** Год */
  period_year: XmlElem<number | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
