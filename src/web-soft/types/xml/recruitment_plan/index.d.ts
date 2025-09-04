interface RecruitmentPlanDocumentBudgetPeriod {
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Название */
  budget_period_name: XmlElem<string | null>;
  /** Численность */
  quantity: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface RecruitmentPlanDocumentRecruitmentMethod {
  recruitment_method_id: XmlElem<number | null, RecruitmentMethodCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCandidateSource {
  candidate_source_id: XmlElem<number | null, CandidateSourceCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCoordinator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Является непосредственным руководителем
   * @default false
   */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /**
   * Является ответственным
   * @default false
   */
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

type RecruitmentPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecruitmentPlanDocument;
  /** ID */
  id: XmlElem<number | null>;
  /**
   * Тип должности
   * @default name
   */
  position_type: XmlElem<string | null>;
  /** Должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /**
   * Статус
   * @default plan
   */
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Грейд */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  /** Тип вакансий */
  vacancy_type_id: XmlElem<number | null, VacancyTypeCatalogDocumentTopElem>;
  /** Общая численность */
  quantity: XmlElem<number | null>;
  /** Периоды */
  budget_periods: XmlMultiElem<RecruitmentPlanDocumentBudgetPeriod | null>;
  /** Способы подбора */
  recruitment_methods: XmlMultiElem<RecruitmentPlanDocumentRecruitmentMethod | null>;
  /** Источники кандидатов */
  candidate_sources: XmlMultiElem<RecruitmentPlanDocumentCandidateSource | null>;
  /** Наставники */
  coordinators: XmlMultiElem<RecruitmentPlanDocumentCoordinator | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type RecruitmentPlanDocument = XmlDocument & {
  TopElem: RecruitmentPlanDocumentTopElem;
  recruitment_plan: RecruitmentPlanDocumentTopElem;
  DocDesc(): string;
};
