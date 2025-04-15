interface QualificationDocumentRewardParams {
  /** Сумма */
  sum: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  receivers_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  script: XmlElem<string | null>;
  block_from_common_params: XmlElem<boolean | null>;
  can_not_transmit_twice: XmlElem<boolean | null>;
  can_not_transmit_to_sender: XmlElem<boolean | null>;
  can_not_transmit_to_manager: XmlElem<boolean | null>;
  available_rewards_num: XmlElem<number | null>;
  exception_group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  fill_from_common_params: XmlElem<boolean | null>;
  reason: XmlElem<string | null>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  min_symbols_num: XmlElem<number | null>;
  min_words_num: XmlElem<number | null>;
}

interface QualificationDocumentCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface QualificationDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface QualificationDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface QualificationDocumentCompoundProgram {
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
}

interface QualificationDocumentQualification {
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
}

interface QualificationDocumentAssessmentAppraise {
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
}

interface QualificationDocumentEvalCondition {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  eval_str: XmlElem<string | null>;
  max_value: XmlElem<number | null>;
}

interface QualificationDocumentView extends DescBase {
  /**
   * @temp
   * @default course
   */
  tab_selector: XmlElem<string>;
}

type QualificationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
GameBonusBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: QualificationDocument;
  /**
   * Тип вступления
   * @default close
   */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Уровень */
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  /** Родительская квалификация */
  parent_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.qualification_statuss>;
  /**
   * При приеме на работу
   * @default true
   */
  test_on_hire: XmlElem<boolean>;
  /** Количество дней до следующего подтверждения */
  days_for_check: XmlElem<number | null>;
  /** Срок прохождения (число дней) */
  term_days: XmlElem<number | null>;
  /** Число дней до срока истечения квалификации (число дней) */
  expires_days: XmlElem<number | null>;
  /**
   * Разрешить самостоятельное назначение испытаний по квалификации
   * @default true
   */
  yourself_start: XmlElem<boolean>;
  is_reward: XmlElem<boolean | null>;
  work_experience_type: XmlElem<string | null>;
  condition_type: XmlElem<string | null>;
  condition_value: XmlElem<number | null>;
  period_type: XmlElem<string | null>;
  is_active: XmlElem<boolean | null>;
  reward_params: XmlElem<QualificationDocumentRewardParams | null>;
  /** Электронные курсы */
  courses: XmlMultiElem<QualificationDocumentCourse | null>;
  /** Тесты */
  assessments: XmlMultiElem<QualificationDocumentAssessment | null>;
  /** Учебные программы */
  education_methods: XmlMultiElem<QualificationDocumentEducationMethod | null>;
  /** Модульные программы */
  compound_programs: XmlMultiElem<QualificationDocumentCompoundProgram | null>;
  /** Квалификации */
  qualifications: XmlMultiElem<QualificationDocumentQualification | null>;
  /** Оценочные процедуры */
  assessment_appraises: XmlMultiElem<QualificationDocumentAssessmentAppraise | null>;
  allow_assign(): unknown;
  eval_conditions: XmlMultiElem<QualificationDocumentEvalCondition | null>;
  eval_assignment_query: XmlElem<string | null>;
  get_assignment_persons(): unknown;
  get_scaled_progress(personId: number, param: Object): unknown;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<QualificationDocumentView | null>;
};

type QualificationDocument = XmlDocument & {
  TopElem: QualificationDocumentTopElem;
  qualification: QualificationDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
