type EducationMethodCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Тип проведения
   * @default org
   */
  type: XmlElem<string, typeof common.education_method_types>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string, typeof common.education_method_states>;
  /** Организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /**
   * Является открытой учебной программой
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Длительность (часов) */
  duration: XmlElem<number | null>;
  /** Длительность (дней) */
  duration_days: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Тип документооборота */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Форма проведения */
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  /** Тип мероприятия */
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
