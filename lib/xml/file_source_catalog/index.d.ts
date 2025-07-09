type FileSourceCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /**
   * Доступен поиск по источнику
   * @default false
   */
  search_available: XmlElem<boolean>;
  /**
   * Доступен выбор файлов из источника
   * @default false
   */
  selection_available: XmlElem<boolean>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
