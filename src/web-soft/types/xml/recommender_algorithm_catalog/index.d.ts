type RecommenderAlgorithmCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Включен
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Библиотека программного кода */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /**
   * Текущий пользователь
   * @default false
   */
  is_cur_user: XmlElem<boolean>;
  /**
   * Типы объектов
   * @default false
   */
  is_object_type: XmlElem<boolean>;
  /**
   * Кеширование данных
   * @default false
   */
  use_cache: XmlElem<boolean>;
  /**
   * Длительность кеширования (мин)
   * @default 0
   */
  cache_time: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
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
  OnBuild(): void;
};
