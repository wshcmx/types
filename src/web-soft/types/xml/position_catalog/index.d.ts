type PositionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Сотрудник */
  basic_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  basic_collaborator_fullname: XmlElem<string | null>;
  /** Ставка */
  basic_rate: XmlElem<number | null>;
  /**
   * Является руководителем
   * @default false
   */
  is_boss: XmlElem<boolean>;
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /** Дата завершения работы в должности */
  position_finish_date: XmlElem<Date | null>;
  /**
   * Действие назначения прекращено
   * @default false
   */
  is_position_finished: XmlElem<boolean | null>;
  /** Тип назначения */
  position_assignment_type: XmlElem<string | null, typeof common.position_assignment_types>;
  /** Тип назначения */
  position_appointment_type_id: XmlElem<number | null, AppointmentTypeCatalogDocumentTopElem>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профили KPI */
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Профиль знаний */
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Позиция штатного рассписания */
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
