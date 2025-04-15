type OperationDocumentTopElem = XmlTopElem &
MsParametersBase &
WebVariablesBase & {
  Doc: OperationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  /**
   * Является системной
   * @default false
   */
  is_system: XmlElem<boolean>;
  /**
   * Приоритет
   * @default 0
   */
  priority: XmlElem<number>;
  /** Операция */
  action: XmlElem<string | null>;
  /**
   * Тип
   * @default 0
   */
  operation_type: XmlElem<number>;
  /**
   * Объект базы
   * @default collaborator
   */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Применимо к следующим объектам */
  operation_catalog_list: XmlElem<string | null>;
  /** Группа */
  group: XmlElem<string | null>;
  /** Код JS */
  script: XmlElem<string | null>;
  /** Пост код */
  post_code: XmlElem<string | null>;
  /** Программный код */
  eval_code: XmlElem<string | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Формула условия видимости */
  access_eval_code: XmlElem<string | null>;
  /** Использовать условия видимости */
  use_access_eval(): unknown;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  execute(parameters: unknown, variables: unknown): unknown;
};

type OperationDocument = XmlDocument & {
  TopElem: OperationDocumentTopElem;
  operation: OperationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
