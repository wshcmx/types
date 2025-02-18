interface AssessmentPlanDocumentPersonIdSd {
  /** ФИО сотрудника */
  fullname: XmlElem<string | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название подразделения */
  position_parent_name: XmlElem<string | null>;
  /** Подразделение */
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Является уволенным */
  is_dismiss: XmlElem<boolean | null>;
}

interface AssessmentPlanDocumentPersonId {
  sd: XmlElem<AssessmentPlanDocumentPersonIdSd | null>;
}

interface AssessmentPlanDocumentExpertPersonIdSd {
  /** ФИО сотрудника */
  fullname: XmlElem<string | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название подразделения */
  position_parent_name: XmlElem<string | null>;
  /** Подразделение */
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Является уволенным */
  is_dismiss: XmlElem<boolean | null>;
}

interface AssessmentPlanDocumentExpertPersonId {
  sd: XmlElem<AssessmentPlanDocumentExpertPersonIdSd | null>;
}

interface AssessmentPlanDocumentAssessmentResultRecommend {
  assessment_result_recommend_id: XmlElem<number | null, AssessmentResultRecommendCatalogDocumentTopElem>;
  assessment_result_recommend_name: XmlElem<string | null>;
}

interface AssessmentPlanDocumentAppraisedPeriod {
  period_id: XmlElem<string | null>;
  period_name: XmlElem<string | null>;
  /** @default false */
  is_done: XmlElem<boolean | null>;
}

interface AssessmentPlanDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface AssessmentPlanDocumentCustomExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number | null>;
  /** @default false */
  is_done: XmlElem<boolean>;
  /** @default false */
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string | null>;
}

interface AssessmentPlanDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /**
   * @temp
   * @default 0
   */
  flag_count: XmlElem<number>;
}

interface AssessmentPlanDocumentKilledPa {
  /** @temp */
  pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
}

interface AssessmentPlanDocumentParticipant {
  participant_id: XmlElem<number | null>;
  /** @temp */
  pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** @temp */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @temp */
  expert_person_fullname: XmlElem<string | null>;
  /** @temp */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** @temp */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  /**
   * @temp
   * @default false
   */
  is_done: XmlElem<boolean>;
  /**
   * @temp
   * @default false
   */
  is_ready: XmlElem<boolean>;
}

interface AssessmentPlanDocumentExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** @default false */
  is_custom: XmlElem<boolean>;
}

interface AssessmentPlanDocumentCustomField {
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

type AssessmentPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: AssessmentPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<AssessmentPlanDocumentPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<AssessmentPlanDocumentExpertPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Руководитель */
  boss_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /** @default false */
  flag_appraise_department: XmlElem<boolean>;
  /**
   * Объект оценки
   * @default collaborator
   */
  assessment_object_type: XmlElem<string>;
  /** Тип процедуры */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /**
   * Признак завершения
   * @default false
   */
  is_done: XmlElem<boolean>;
  /** Интегральная оценка */
  integral_mark: XmlElem<number | null>;
  /** @default false */
  flag_is_processed: XmlElem<boolean>;
  /** Рекомендации */
  assessment_result_recommends: XmlMultiElem<AssessmentPlanDocumentAssessmentResultRecommend | null>;
  /** Сотрудник */
  workflow_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** План. дата завершения */
  workflow_end_date: XmlElem<Date | null>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  appraised_periods: XmlMultiElem<AssessmentPlanDocumentAppraisedPeriod | null>;
  /** Комментарии */
  custom_comments: XmlMultiElem<AssessmentPlanDocumentCustomComment | null>;
  /** Согласующие эксперты */
  custom_experts: XmlMultiElem<AssessmentPlanDocumentCustomExpert | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  temp: XmlElem<string | null>;
  fire_wf_action: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<AssessmentPlanDocumentView | null>;
  /** @temp */
  killed_pas: XmlMultiElem<AssessmentPlanDocumentKilledPa | null>;
  /** @temp */
  participants: XmlMultiElem<AssessmentPlanDocumentParticipant | null>;
  /** @default false */
  flag_expert_select: XmlElem<boolean>;
  experts: XmlMultiElem<AssessmentPlanDocumentExpert | null>;
  custom_fields: XmlMultiElem<AssessmentPlanDocumentCustomField | null>;
  /** @default 0 */
  index: XmlElem<number>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
};

type AssessmentPlanDocument = XmlDocument & {
  TopElem: AssessmentPlanDocumentTopElem;
  assessment_plan: AssessmentPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
