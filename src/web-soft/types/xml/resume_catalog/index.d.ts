type ResumeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Пол */
  sex: XmlElem<string | null>;
  /** Email */
  email: XmlElem<string | null>;
  /** Семейное положение */
  family_status: XmlElem<string | null>;
  /** Дата рождения */
  birth_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация сотрудника */
  person_org_name: XmlElem<string | null>;
  /** Подразделение сотрудника */
  person_subdivision: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position: XmlElem<string | null>;
  /** ID cотрудника, заполнившего резюме */
  creator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник, заполнивший резюме */
  creator_person_fullname: XmlElem<string | null>;
  /**
   * Запретить удаление резюме на Портале
   * @default false
   */
  forbid_portal_delete: XmlElem<boolean>;
  /**
   * Тип заполнения
   * @default usual
   */
  filling_type: XmlElem<string>;
  /** Зарплата от */
  min_wage: XmlElem<number | null>;
  /** Зарплата до */
  max_wage: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** ID профессиональной области */
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** ID профессиональной области */
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  /** Профессиональная область */
  profession_area: XmlElem<string | null>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Тип занятости */
  employment_type_id: XmlElem<string | null, typeof common.employment_types>;
  /** Занятость */
  schedule_work_id: XmlElem<string | null, typeof common.employment_kinds>;
  /** График работы */
  schedule_id: XmlElem<number | null, WorkScheduleCatalogDocumentTopElem>;
  /** Источник вакансии */
  vacancy_source_id: XmlElem<number | null, VacancySourceCatalogDocumentTopElem>;
  /** Стаж */
  exp_years: XmlElem<number | null>;
  /** Готовность к командировкам */
  willingness_travel_type_id: XmlElem<string | null, typeof common.willingness_travel_types>;
  /**
   * Готовность к переезду
   * @default false
   */
  is_willing_relocate: XmlElem<boolean>;
  /** ID уровня образования */
  main_educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  /** Уровень образования */
  education: XmlElem<string | null>;
  /**
   * Архив
   * @default false
   */
  is_archive: XmlElem<boolean>;
  /**
   * Является кандидатом
   * @default false
   */
  is_candidate: XmlElem<boolean>;
  lng_id: XmlMultiElemObject<string | null, typeof common.languages>;
  educ_type_id: XmlMultiElemObject<string | null, typeof common.expended_educ_types>;
  /** Образование */
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
