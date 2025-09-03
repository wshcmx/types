type KpiProfileCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Семейство */
  competence_profile_family_id: XmlElem<number | null, CompetenceProfileFamilyCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Родительски профиль KPI */
  parent_kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** КПЭ */
  kpi_id: XmlMultiElemObject<number | null, KpiCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Сотрудник */
  workflow_main_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
