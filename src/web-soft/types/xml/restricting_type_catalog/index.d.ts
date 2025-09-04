type RestrictingTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default group
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип периода */
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
