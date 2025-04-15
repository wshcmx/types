interface DevelopmentPlanDocumentPersonIdSd {
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

interface DevelopmentPlanDocumentPersonId {
  sd: XmlElem<DevelopmentPlanDocumentPersonIdSd | null>;
}

interface DevelopmentPlanDocumentExpertPersonIdSd {
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

interface DevelopmentPlanDocumentExpertPersonId {
  sd: XmlElem<DevelopmentPlanDocumentExpertPersonIdSd | null>;
}

interface DevelopmentPlanDocumentCustomExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number | null>;
  /** @default false */
  is_done: XmlElem<boolean>;
  /** @default false */
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string | null>;
}

interface DevelopmentPlanDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface DevelopmentPlanDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type DevelopmentPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
DevelopmentPlanDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPlanDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Сотрудник */
  person_id: XmlElem<DevelopmentPlanDocumentPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<DevelopmentPlanDocumentExpertPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /**
   * Признак завершенности
   * @default false
   */
  is_done: XmlElem<boolean>;
  /**
   * Признак результирующей формы
   * @default false
   */
  is_final: XmlElem<boolean>;
  /**
   * Признак готовности (для параллельной оценки)
   * @default false
   */
  is_ready: XmlElem<boolean>;
  /** @default false */
  flag_is_processed: XmlElem<boolean>;
  /** @default false */
  flag_appraise_department: XmlElem<boolean>;
  /** Оценочная процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Планы оценки */
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  /** Карьерный резерв */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /**
   * Тип оценочной процедуры
   * @default development_plan
   */
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  /** Статус оценивающего */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  temp: XmlElem<string | null>;
  /** Согласующие эксперты */
  custom_experts: XmlMultiElem<DevelopmentPlanDocumentCustomExpert | null>;
  custom_comments: XmlMultiElem<DevelopmentPlanDocumentCustomComment | null>;
  comment: XmlElem<string | null>;
  /** Дата последнего сохранения */
  appraise_date: XmlElem<Date | null>;
  /**
   * Порядковый номер
   * @default 0
   */
  index: XmlElem<number>;
  /** @temp */
  view: XmlElem<DevelopmentPlanDocumentView | null>;
};

type DevelopmentPlanDocument = XmlDocument & {
  TopElem: DevelopmentPlanDocumentTopElem;
  development_plan: DevelopmentPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
