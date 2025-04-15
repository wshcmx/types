interface PositionCommonDocumentParentPositionCommon {
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Направление должностного перемещения */
  career_transition_direction: XmlElem<string | null, typeof common.career_transition_direction_types>;
}

interface PositionCommonDocumentPositionFamily {
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
}

interface PositionCommonDocumentPositionName {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
}

interface PositionCommonDocumentBonusType {
  id: XmlElem<string | null>;
  /**
   * Активно
   * @default false
   */
  checked: XmlElem<boolean>;
  /** Название */
  name: XmlElem<string | null>;
  /** Мин. премия */
  min_value: XmlElem<number | null>;
  /** Макс. премия */
  max_value: XmlElem<number | null>;
  /**
   * Тип расчета
   * @default abs
   */
  value_type: XmlElem<string>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface PositionCommonDocumentGrade {
  /** ID грейда */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  /** Минимальная зарплата */
  min_grade: XmlElem<number | null>;
  /** Максимальная зарплата */
  max_grade: XmlElem<number | null>;
}

interface PositionCommonDocumentBenefit {
  /** Привилегии */
  id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
}

interface PositionCommonDocumentCompetenceProfile {
  /** Профиль компетенций */
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionCommonDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Период */
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface PositionCommonDocumentSubdivision {
  /** Подразделения */
  id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface PositionCommonDocumentOrg {
  /** Организации */
  id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCompoundProgram {
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelQualification {
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevel {
  level_id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Требуемые типы сертификатов */
  certificate_types: XmlMultiElem<PositionCommonDocumentLevelCertificateType | null>;
  /** Требуемые модульные программы */
  compound_programs: XmlMultiElem<PositionCommonDocumentLevelCompoundProgram | null>;
  /** Требуемые учебные программы */
  education_methods: XmlMultiElem<PositionCommonDocumentLevelEducationMethod | null>;
  /** Требуемые типовые программы развития */
  typical_development_programs: XmlMultiElem<PositionCommonDocumentLevelTypicalDevelopmentProgram | null>;
  /** Требуемые квалификации */
  qualifications: XmlMultiElem<PositionCommonDocumentLevelQualification | null>;
}

interface PositionCommonDocumentView extends DescBase {
  /** @temp */
  benefit_id: XmlElem<string | null>;
  /**
   * @temp
   * Классификатор
   */
  knowledge_classifier_id: XmlElem<number | null>;
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
}

type PositionCommonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: PositionCommonDocument;
  /** Минимальный грейд */
  min_grade: XmlElem<number | null>;
  /** Максимальный грейд */
  max_grade: XmlElem<number | null>;
  /** Сумма весов привилегий */
  benefit_sum: XmlElem<number | null>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.position_common_statuss>;
  /** Возможные должностные перемещения */
  parent_position_commons: XmlMultiElem<PositionCommonDocumentParentPositionCommon | null>;
  /** Семействa должностей */
  position_familys: XmlMultiElem<PositionCommonDocumentPositionFamily | null>;
  /** Названия должностей */
  position_names: XmlMultiElem<PositionCommonDocumentPositionName | null>;
  /** Минимальная зарплата */
  min_salary: XmlElem<number | null>;
  /** Максимальная зарплата */
  max_salary: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /**
   * Можно привлекать временный персонал
   * @default false
   */
  allow_outstaff: XmlElem<boolean>;
  /** Способы премирования */
  bonus_types: XmlMultiElem<PositionCommonDocumentBonusType | null>;
  /** Грейды */
  grades: XmlMultiElem<PositionCommonDocumentGrade | null>;
  /** Привилегии */
  benefits: XmlMultiElem<PositionCommonDocumentBenefit | null>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профили компетенций */
  competence_profiles: XmlMultiElem<PositionCommonDocumentCompetenceProfile | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionCommonDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Профиль знаний */
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  /** Подразделения */
  subdivisions: XmlMultiElem<PositionCommonDocumentSubdivision | null>;
  /** Организации */
  orgs: XmlMultiElem<PositionCommonDocumentOrg | null>;
  cur_level_id: XmlElem<number | null>;
  /** Ступени */
  levels: XmlMultiElem<PositionCommonDocumentLevel | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<PositionCommonDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type PositionCommonDocument = XmlDocument & {
  TopElem: PositionCommonDocumentTopElem;
  position_common: PositionCommonDocumentTopElem;
  OnBeforeSave(): void;
  OnCreate(): void;
  OnInit(): void;
  DocDesc(): string;
};
