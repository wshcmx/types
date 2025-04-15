type VacancyCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  /** ID, используемый в источнике данных */
  source_id: XmlElem<string | null>;
  /** ID профессиональной области */
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Профессиональная область */
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Занятость */
  schedule_work_id: XmlElem<string | null, typeof common.employment_kinds>;
  /** График работы */
  schedule_id: XmlElem<number | null, WorkScheduleCatalogDocumentTopElem>;
  /** Тип образования */
  educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  /** Тип занятости */
  employment_type_id: XmlElem<string | null, typeof common.employment_types>;
  /** Условия труда */
  work_condition_id: XmlElem<number | null, WorkConditionCatalogDocumentTopElem>;
  /** Режим работы */
  work_mode_id: XmlElem<number | null, WorkModeCatalogDocumentTopElem>;
  /** Система оплаты труда */
  wage_system_id: XmlElem<number | null, WageSystemCatalogDocumentTopElem>;
  /** Материальная ответственность */
  material_liability_id: XmlElem<number | null, MaterialLiabilityCatalogDocumentTopElem>;
  /** Причина вакансии */
  vacancy_reason_id: XmlElem<number | null, VacancyReasonCatalogDocumentTopElem>;
  /** Опыт работы */
  work_experience_id: XmlElem<number | null, WorkExperienceCatalogDocumentTopElem>;
  /** Возраст от */
  min_age: XmlElem<number | null>;
  /** Возраст до */
  max_age: XmlElem<number | null>;
  /** Зарплата от */
  min_wage: XmlElem<number | null>;
  /** Зарплата до */
  max_wage: XmlElem<number | null>;
  /** Средний уровень зарплаты */
  avg_wage: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Бюджет от */
  min_budget: XmlElem<number | null>;
  /** Бюджет до */
  max_budget: XmlElem<number | null>;
  /** Валюта */
  budget_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Подчинение */
  subordination: XmlElem<string | null>;
  /** Дата публикации */
  pub_date: XmlElem<Date | null>;
  /** Дата изменения */
  edit_date: XmlElem<Date | null>;
  /** Срок публикации (дней) */
  pub_period: XmlElem<number | null>;
  /** Дата закрытия */
  close_date: XmlElem<Date | null>;
  /**
   * Закрыта
   * @default false
   */
  is_closed: XmlElem<boolean | null>;
  /** Вакансию разместил */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Организация из базы */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Подразделение из базы */
  sub_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  sub_name: XmlElem<string | null>;
  /** ФИО рекрутера */
  recruiter_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Ссылка */
  url: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
