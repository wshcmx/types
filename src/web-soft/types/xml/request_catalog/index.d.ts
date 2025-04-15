type RequestCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код заявки */
  code: XmlElem<string | null>;
  /** Каталог */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Тип заявки */
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /**
   * Состояние
   * @default active
   */
  status_id: XmlElem<string, typeof common.request_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация */
  person_org_name: XmlElem<string | null>;
  /** Название подразделения сотрудника */
  person_subdivision_name: XmlElem<string | null>;
  /**
   * Является групповой
   * @default false
   */
  is_group: XmlElem<boolean>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата закрытия */
  close_date: XmlElem<Date | null>;
  /** Тэги */
  tag_id: XmlMultiElemObject<number | null, TagCatalogDocumentTopElem>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Сотрудник */
  workflow_main_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
