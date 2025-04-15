type PollProcedureCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ответственный за проведение */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Отображать на Портале */
  web_display: XmlElem<boolean | null>;
  /** Статус */
  status: XmlElem<number | null>;
  /**
   * Эталонная
   * @default false
   */
  is_model: XmlElem<boolean>;
  /** Ответственный */
  str_sub_bosses_ids: XmlElem<string | null>;
  /** Запускать */
  trigger_type: XmlElem<string | null, typeof common.trigger_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Хэш эквивалентности */
  equal_hash: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
