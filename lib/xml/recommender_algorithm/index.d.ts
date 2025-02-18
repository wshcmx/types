interface RecommenderAlgorithmDocumentCatalog {
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog {
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplication {
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
  /** Типы объектов */
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog | null>;
}

type RecommenderAlgorithmDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPeriodityBase &
WebVariablesBase & {
  Doc: RecommenderAlgorithmDocument;
  /**
   * Включен
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Библиотека программного кода */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Типы объектов */
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentCatalog | null>;
  context_algorithm_application: XmlElem<RecommenderAlgorithmDocumentContextAlgorithmApplication | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderAlgorithmDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmDocumentTopElem;
  recommender_algorithm: RecommenderAlgorithmDocumentTopElem;
};
