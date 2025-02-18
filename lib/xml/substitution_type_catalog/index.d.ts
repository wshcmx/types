type SubstitutionTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Коды операций */
  operation_codes: XmlElem<string | null>;
  /** Категория */
  operation_id: XmlMultiElemObject<number | null, OperationCatalogDocumentTopElem>;
  /** Коды удаленных действий */
  remote_action_codes: XmlElem<string | null>;
  /** Действия */
  remote_action_id: XmlMultiElemObject<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Нестандартные права (строка или JSON с информацией о правах) */
  data_str: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /**
   * Действует
   * @default true
   */
  is_active: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
