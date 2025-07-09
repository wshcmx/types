type ContestCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название конкурса */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Открытый конкурс
   * @default true
   */
  is_open: XmlElem<boolean>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.contest_states>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Способ оценки работ
   * @default voting
   */
  estimation_id: XmlElem<string | null, typeof common.contest_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
