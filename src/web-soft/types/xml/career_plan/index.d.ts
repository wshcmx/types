interface CareerPlanDocumentStage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /**
   * Направление должностного перемещения
   * @default vertical
   */
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /**
   * Проверять требования при согласовании
   * @default true
   */
  check_requirements: XmlElem<boolean>;
  /** Плановая дата выполнения */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата выполнения */
  fact_date: XmlElem<Date | null>;
  /** @default plan */
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Дополнительные условия */
  stipulation: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface CareerPlanDocumentView {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  /** @temp */
  temp_role_id: XmlElem<number | null>;
}

type CareerPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerPlanDocument;
  /** Дата включения */
  start_date: XmlElem<Date | null>;
  /** @default plan */
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Типовой карьерный план */
  typical_career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  /** @default collaborator */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  stages: XmlMultiElem<CareerPlanDocumentStage | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<CareerPlanDocumentView | null>;
};

type CareerPlanDocument = XmlDocument & {
  TopElem: CareerPlanDocumentTopElem;
  career_plan: CareerPlanDocumentTopElem;
};
