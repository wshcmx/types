type ObjectClaimCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип источника */
  source_type: XmlElem<string | null>;
  /** Источник-ID */
  source_id: XmlElem<number | null>;
  /** Источник-название */
  source_name: XmlElem<string | null>;
  /** Источник-код */
  source_code: XmlElem<string | null>;
  /** Источник-роль */
  source_role: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Объект-ID */
  object_id: XmlElem<number | null>;
  /** Объект-название */
  object_name: XmlElem<string | null>;
  /** Объект-код */
  object_code: XmlElem<string | null>;
  /** Тип элемента */
  element_type: XmlElem<string | null>;
  /** Элемент-ID */
  element_id: XmlElem<number | null>;
  /** Элемент-название */
  element_name: XmlElem<string | null>;
  /** Элемент-код */
  element_code: XmlElem<string | null>;
  /**
   * Чтение
   * @default true
   */
  read: XmlElem<boolean>;
  /**
   * Запись
   * @default true
   */
  write: XmlElem<boolean>;
  /**
   * Удаление
   * @default true
   */
  delete: XmlElem<boolean>;
  /**
   * Список
   * @default true
   */
  list: XmlElem<boolean>;
  /**
   * Запуск
   * @default true
   */
  execute: XmlElem<boolean>;
  /** Роль */
  access_level: XmlElem<number | null>;
  /** Значение доступа */
  value: XmlElem<string | null>;
  /**
   * Действует
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Не обновлять автоматически */
  is_manual: XmlElem<boolean | null>;
  /** Нестандартные права */
  data_str: XmlElem<string | null>;
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
