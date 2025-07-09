type ContractTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Текущий номер */
  current_number: XmlElem<string | null>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /** Суффикс приказа */
  suffix: XmlElem<string | null>;
  /**
   * Флаг использования установки во вновь формируемых приказах
   * @default false
   */
  default_flag: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
