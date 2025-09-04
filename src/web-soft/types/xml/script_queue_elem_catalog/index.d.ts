type ScriptQueueElemCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата для запуска скрипта */
  start_date: XmlElem<Date | null>;
  /** Время запуска */
  start_time: XmlElem<Date | null>;
  /** Время завершения */
  finish_time: XmlElem<Date | null>;
  /**
   * Задержка между запусками
   * @default 0
   */
  delay: XmlElem<number | null>;
  /**
   * Выполнено
   * @default false
   */
  completed: XmlElem<boolean>;
  /**
   * Удалять после выполнения
   * @default true
   */
  delete_automatically: XmlElem<boolean>;
  /** Блок, к которому прикреплен */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
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
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
