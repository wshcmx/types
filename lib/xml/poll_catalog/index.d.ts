type PollCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  end_date: XmlElem<Date | null>;
  /**
   * Основной опрос
   * @default false
   */
  is_main: XmlElem<boolean>;
  /**
   * Опрос завершен
   * @default false
   */
  completed: XmlElem<boolean>;
  /**
   * Анонимный опрос
   * @default false
   */
  is_anonymous: XmlElem<boolean>;
  /**
   * Возможно голосовать только один раз
   * @default false
   */
  is_one_time: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
