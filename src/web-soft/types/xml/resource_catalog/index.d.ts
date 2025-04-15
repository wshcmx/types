type ResourceCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип ресурса
   * @default file
   */
  type: XmlElem<string, typeof common.resource_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.course_test_states>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Тип ресурса базы */
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  /**
   * Разрешить доступ с портала
   * @default true
   */
  allow_download: XmlElem<boolean | null>;
  /**
   * Разрешить поиск
   * @default false
   */
  allow_search: XmlElem<boolean | null>;
  /**
   * Разрешить скачивание файла без авторизации
   * @default false
   */
  allow_unauthorized_download: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /**
   * Количество
   * @default 0
   */
  use_count: XmlElem<number>;
  /** Имя файла */
  file_name: XmlElem<string | null>;
  /** Размер */
  size: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Владелец ресурса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Путь */
  file_path: XmlElem<string | null>;
  checksum: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
