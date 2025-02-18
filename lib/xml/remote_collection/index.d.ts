interface RemoteCollectionDocumentApiSearch {
  /**
   * Возможен полнотекстовый поиск
   * @default true
   */
  has_fulltext: XmlElem<boolean>;
  /** Допустимые имена полей для поиска */
  names: XmlElem<string | null>;
}

interface RemoteCollectionDocumentApiFilter {
  id: XmlElem<string | null>;
  /** Имя поля фильтра */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.filter_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
}

interface RemoteCollectionDocumentAnalyticsParamWvar {
  /** Переменные (модификаторы) выборки для "Центра аналитики" */
  wvar_id: XmlElem<string | null>;
}

interface RemoteCollectionDocumentAnalytics {
  param_wvars: XmlMultiElem<RemoteCollectionDocumentAnalyticsParamWvar | null>;
  /** Поле отбора - дата начала периода */
  filter_start_date: XmlElem<string | null>;
  /** Поле отбора - дата конца периода */
  filter_finish_date: XmlElem<string | null>;
  /** Поле отбора - ID сотрудников */
  filter_person_ids: XmlElem<string | null>;
  /** Наименования ряда */
  field_name: XmlElem<string | null>;
  /** Дата таймлайна */
  field_timestamp: XmlElem<string | null>;
}

interface RemoteCollectionDocumentConstructor extends CriterionBase, ColumnBase {
  /** @default false */
  use: XmlElem<boolean>;
  object_name: XmlElem<string | null>;
}

interface RemoteCollectionDocumentView extends ObjectTypeBase, ResultFieldsBase {
  /**
   * @temp
   * @default xml
   */
  test_format: XmlElem<string>;
  /**
   * @temp
   * @default alert
   */
  test_destination: XmlElem<string>;
  /** @temp */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @temp */
  test_result_obj: XmlElem<unknown | null>;
  /** @temp */
  referer_url: XmlElem<string | null>;
}

type RemoteCollectionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteCollectionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /** Код */
  script: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Версия API
   * @default 0
   */
  api_ver: XmlElem<string | null>;
  api_search: XmlElem<RemoteCollectionDocumentApiSearch | null>;
  /** Фильтры */
  api_filters: XmlMultiElem<RemoteCollectionDocumentApiFilter | null>;
  /**
   * Выборка готова к использованию в "Центре аналитики"
   * @default false
   */
  ready_to_analytics: XmlElem<boolean>;
  analytics: XmlElem<RemoteCollectionDocumentAnalytics | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  start_index: XmlElem<number | null>;
  /** @temp */
  page_index: XmlElem<number | null>;
  /** @temp */
  page_size: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  use_cache: XmlElem<number>;
  sort_field_name: XmlElem<string | null>;
  sort_direction: XmlElem<string | null>;
  /** @temp */
  columns_white_list: XmlMultiElemObject<string | null>;
  /**
   * @temp
   * @default source
   */
  tree_node_id: XmlElem<string | null>;
  constructor: XmlElem<RemoteCollectionDocumentConstructor | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /**
   * По умолчанию на портале
   * @default false
   */
  default_for_portal: XmlElem<boolean>;
  /**
   * По умолчанию в приложениях
   * @default false
   */
  default_for_admin: XmlElem<boolean>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<RemoteCollectionDocumentView | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  setPaging(idx: number, size: number): unknown;
  setColumnsWhiteList(aFields: unknown): unknown;
  getStamp(curUserId: number, curObjectId: number): unknown;
  evaluate(dataType: string, request: Request, argVars: Object, configuration: string): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type RemoteCollectionDocument = XmlDocument & {
  TopElem: RemoteCollectionDocumentTopElem;
  remote_collection: RemoteCollectionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
