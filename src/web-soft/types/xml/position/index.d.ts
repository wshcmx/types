interface PositionDocumentCompetenceProfile {
  /** Профиль компетенций */
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
}

interface PositionDocumentView extends DescBase {
  /** @temp */
  basic_collaborator_id: XmlElem<number | null>;
  /** @temp */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  parent_object_id: XmlElem<number | null>;
  /**
   * @temp
   * @default false
   */
  drop_pers_hier_entry: XmlElem<boolean | null>;
}

type PositionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: PositionDocument;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Сотрудник */
  basic_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /** Ставка */
  basic_rate: XmlElem<number | null>;
  /**
   * Является руководителем
   * @default false
   */
  is_boss: XmlElem<boolean>;
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /** Месячная ставка */
  cost_month: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профили компетенций */
  competence_profiles: XmlMultiElem<PositionDocumentCompetenceProfile | null>;
  /** Код профиля компетенций */
  competence_codes: XmlElem<string | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Профиль знаний */
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Ступень типовой должности */
  position_common_level_id: XmlElem<number | null>;
  /** Название ступени типовой должности */
  position_common_level_name: XmlElem<string | null>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
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
  /** Позиция штатного рассписания */
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<PositionDocumentView | null>;
};

type PositionDocument = XmlDocument & {
  TopElem: PositionDocumentTopElem;
  position: PositionDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  OnLocalInit(): void;
  DocDesc(): string;
};
