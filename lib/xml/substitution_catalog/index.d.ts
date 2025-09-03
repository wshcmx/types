type SubstitutionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.substitution_status_types>;
  /** Тип замещения */
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  /** Тип целевого объекта */
  target_object_type: XmlElem<string | null>;
  /** Список целевых объектов */
  target_object_selector: XmlElem<string | null>;
  target_object_id: XmlMultiElemObject<number | null>;
  /** Нестандартные права (строка или JSON с информацией о правах) */
  data_str: XmlElem<string | null>;
  /**
   * Выбор сотрудников
   * @default person
   */
  person_selector: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация объекта */
  person_org_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
