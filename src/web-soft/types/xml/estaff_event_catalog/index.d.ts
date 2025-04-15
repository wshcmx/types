type EstaffEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код события */
  code_event: XmlElem<string | null>;
  event_name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Код вакансии */
  vacancy_code: XmlElem<string | null>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Тип события E-Staff */
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  /** Тип события E-Staff */
  estaff_event_type_name: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default document
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Прикрепленные объекты */
  objects: XmlElem<string | null>;
  /** Связанный объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  linked_object_url: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  event_status_id: XmlElem<string | null, typeof common.estaff_event_status_types>;
  estaff_event_eid: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
