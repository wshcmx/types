type OperationCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  /** Тип операции */
  operation_type: XmlElem<number | null>;
  /** Действие */
  action: XmlElem<string | null>;
  /** Применимо к следующим объектам */
  operation_catalog_list: XmlElem<string | null>;
  /** Название операции */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Группа */
  group: XmlElem<string | null>;
  /** Является системным */
  is_system: XmlElem<boolean | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /**
   * Использовать программный код
   * @default false
   */
  use_script: XmlElem<boolean>;
  /**
   * Использовать условия видимости
   * @default false
   */
  use_access_eval: XmlElem<boolean>;
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
  /**
   * Приоритет
   * @default 0
   */
  priority: XmlElem<number>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
