interface StatisticRecDocumentAnalyticsParamWvar {
  /** Переменные (модификаторы) показателя для "Центра аналитики" */
  wvar_id: XmlElem<string | null>;
}

interface StatisticRecDocumentAnalytics {
  param_wvars: XmlMultiElem<StatisticRecDocumentAnalyticsParamWvar | null>;
  /** Поле отбора - дата начала периода */
  filter_start_date: XmlElem<string | null>;
  /** Поле отбора - дата конца периода */
  filter_finish_date: XmlElem<string | null>;
  /** Поле отбора - ID сотрудников */
  filter_person_ids: XmlElem<string | null>;
}

interface StatisticRecDocumentPeriodType {
  type: XmlElem<string | null, typeof common.perioditys>;
  weight: XmlElem<number | null>;
  before_depth: XmlElem<number | null>;
  after_depth: XmlElem<number | null>;
  norm_from: XmlElem<number | null>;
  norm_to: XmlElem<number | null>;
  aggregation: XmlElem<string | null>;
}

interface StatisticRecDocumentCatalog {
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string | null>;
  /** @default true */
  enabled: XmlElem<boolean>;
}

interface StatisticRecDocumentInformer {
  /** @default false */
  auto_use: XmlElem<boolean>;
  color: XmlElem<string | null>;
  title: XmlElem<string | null>;
  output_type: XmlElem<string | null>;
}

interface StatisticRecDocumentView extends ObjectTypeBase {
  /** @temp */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @temp */
  test_result_obj: XmlElem<unknown | null>;
  /** @temp */
  referer_url: XmlElem<string | null>;
}

type StatisticRecDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ResultFieldsBase &
WebVariablesBase &
ExecCodeBase &
I18nBase & {
  Doc: StatisticRecDocument;
  /** Ссылка на файл */
  url: XmlElem<string | null>;
  /**
   * Включен
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /**
   * Рассчитывать автоматически
   * @default false
   */
  auto_calc: XmlElem<boolean>;
  /** Дата последнего расчета */
  last_calculate_date: XmlElem<Date | null>;
  /**
   * Периодичность вычисления
   * @default 0
   */
  calc_period: XmlElem<number | null>;
  /** Вычисление контекста */
  context_calc: XmlElem<boolean | null>;
  /**
   * Показатель готов к использованию в "Центре аналитики"
   * @default false
   */
  ready_to_analytics: XmlElem<boolean>;
  /** @default none */
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  analytics: XmlElem<StatisticRecDocumentAnalytics | null>;
  period_types: XmlMultiElem<StatisticRecDocumentPeriodType | null>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Окончание */
  finish_date: XmlElem<Date | null>;
  /** Веб-шаблон детального описания */
  detail_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  graph_color: XmlElem<string | null>;
  /** Тип уведомления */
  notification_type_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string | null>;
  catalogs: XmlMultiElem<StatisticRecDocumentCatalog | null>;
  /** Выполняемый код */
  run_code: XmlElem<string | null>;
  informer: XmlElem<StatisticRecDocumentInformer | null>;
  launch_settings: XmlElem<MsPeriodityBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** @temp */
  view: XmlElem<StatisticRecDocumentView | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  calculate_on_server(objectId: number): unknown;
  calculate(object: unknown, from: Date, to: Date, period: string, option: Object): unknown;
  calculate_context(objectTopElem: XmlTopElem, env: unknown, configuration: string): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type StatisticRecDocument = XmlDocument & {
  TopElem: StatisticRecDocumentTopElem;
  statistic_rec: StatisticRecDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
