interface StaffPositionDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface StaffPositionDocumentCompetenceProfile {
  /** Профиль компетенций */
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

type StaffPositionDocumentTopElem = XmlTopElem &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.project_status_types>;
  /** Дата утверждения */
  start_date: XmlElem<Date | null>;
  /** Дата закрытия */
  finish_date: XmlElem<Date | null>;
  /** Организация */
  org_name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  subdivision_name: XmlElem<string | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Профессия */
  profession_id: XmlElem<number | null, ProfessionCatalogDocumentTopElem>;
  /** Разряд профессии */
  profession_category_id: XmlElem<number | null, ProfessionCategoryCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Количество штатных единиц */
  staff_num: XmlElem<number | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<StaffPositionDocumentKpiProfile | null>;
  /** Профиль знаний */
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профили компетенций */
  competence_profiles: XmlMultiElem<StaffPositionDocumentCompetenceProfile | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionDocument = XmlDocument & {
  TopElem: StaffPositionDocumentTopElem;
  staff_position: StaffPositionDocumentTopElem;
  DocDesc(): string;
};
