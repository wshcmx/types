type StatisticRecCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
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
  /**
   * Вычисление контекста
   * @default false
   */
  context_calc: XmlElem<boolean>;
  /**
   * Готов к использованию в "Центре аналитики"
   * @default false
   */
  ready_to_analytics: XmlElem<boolean>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Период */
  period_type: XmlMultiElemObject<string | null>;
  /**
   * Тип расчета
   * @default relative
   */
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Окончание */
  finish_date: XmlElem<Date | null>;
  /** Сдвиг значений */
  depth: XmlElem<number | null>;
  /** Норма с */
  norm_from: XmlElem<number | null>;
  /** Норма по */
  norm_to: XmlElem<number | null>;
  /** Тип уведомления */
  notification_type_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
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
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Тип объекта */
  catalog: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  /** Блок */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
