interface PersonnelReserveDocumentTask extends FileListBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** @default test_learning */
  type: XmlElem<string, typeof common.career_reserve_type_tasks_types>;
  /** @default plan */
  status: XmlElem<string, typeof common.personnel_reserve_task_status_types>;
  /** Плановая дата выполнения */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата выполнения */
  fact_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  /** Оценка */
  score: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  /** @default assessment */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  active_test_learning_id: XmlElem<number | null, ActiveTestLearningCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_appraise_result_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** @default false */
  add_exist_appraise: XmlElem<boolean | null>;
  poll_result_id: XmlElem<number | null, PollResultCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
}

interface PersonnelReserveDocumentRecommendator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface PersonnelReserveDocumentViewTalentPoolFuncManager {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface PersonnelReserveDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  part_index: XmlElem<number>;
  talent_pool_func_managers: XmlMultiElem<PersonnelReserveDocumentViewTalentPoolFuncManager | null>;
}

type PersonnelReserveDocumentTopElem = XmlTopElem &
MsPersonSdBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelReserveDocument;
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  include_reserve_date: XmlElem<Date | null>;
  /** Дата исключения из резерва */
  finish_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default candidate
   */
  status: XmlElem<string, typeof common.personnel_reserve_status_types>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /** Основание для исключения */
  exclusion_reason_id: XmlElem<number | null, ExclusionReasonCatalogDocumentTopElem>;
  /** Способ выдвижения в резерв */
  nomination_id: XmlElem<number | null, TalentPoolNominationCatalogDocumentTopElem>;
  /** Потенциал развития */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  tasks: XmlMultiElem<PersonnelReserveDocumentTask | null>;
  recommendators: XmlMultiElem<PersonnelReserveDocumentRecommendator | null>;
  overall_comment: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  set_task(task: unknown): string | void;
  change_func_managers_list(): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<PersonnelReserveDocumentView | null>;
};

type PersonnelReserveDocument = XmlDocument & {
  TopElem: PersonnelReserveDocumentTopElem;
  personnel_reserve: PersonnelReserveDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
