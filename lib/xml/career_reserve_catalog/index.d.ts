type CareerReserveCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.career_reserve_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Текущая должность */
  person_position: XmlElem<string | null>;
  /** Дата внесения */
  start_date: XmlElem<Date | null>;
  /** Дата планируемой готовности */
  plan_readiness_date: XmlElem<Date | null>;
  /** Дата фактической готовности */
  finish_date: XmlElem<Date | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** Кадровый резерв */
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  /** Преемник */
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  /** Карьерный план */
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  /**
   * Тип развития
   * @default position
   */
  position_type: XmlElem<string>;
  /** Цель */
  position_name: XmlElem<string | null>;
  /** Целевая должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Целевая типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Место проведения */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Типовая программа развития */
  development_programs_id: XmlMultiElemObject<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
