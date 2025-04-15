interface ResumeDocumentSkill {
  id: XmlElem<string | null>;
  /** ID навыка */
  skill_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** Родительский элемент */
  skill_parent_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** Название навыка */
  skill_name: XmlElem<string | null>;
  /** ID заглавного навыка с уровнями */
  skill_id_with_levels: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  /** ID уровня */
  level_id: XmlElem<string | null>;
  /** Название уровня */
  level_name: XmlElem<string | null>;
}

interface ResumeDocumentWorkExperience {
  id: XmlElem<string | null>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Окончание */
  finish_date: XmlElem<Date | null>;
  /** Организация */
  org_name: XmlElem<string | null>;
  /** Профессиональная область */
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  /** Профессиональная область */
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  org_phone: XmlElem<string | null>;
  org_fax: XmlElem<string | null>;
  org_email: XmlElem<string | null>;
  org_address: XmlElem<string | null>;
  org_site: XmlElem<string | null>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Обязанности */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface ResumeDocumentEducation {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.expended_educ_types>;
  /** Тип */
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  /** Форма обучения */
  form: XmlElem<number | null, EducationFormCatalogDocumentTopElem>;
  /** Способ получения образования */
  mode: XmlElem<number | null, EducationModeCatalogDocumentTopElem>;
  /** Дата окончания */
  date: XmlElem<number | null>;
  /** Тип профессиональной области */
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  /** Специальность по диплому */
  professional_area_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Родительский элемент */
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Факультет */
  specialisation: XmlElem<string | null>;
  /** Результат */
  result: XmlElem<string | null>;
  site: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface ResumeDocumentProject {
  id: XmlElem<string | null>;
  sphere: XmlElem<string | null>;
  type: XmlElem<string | null>;
  examination_year: XmlElem<number | null>;
  year: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface ResumeDocumentPublication {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  publisher: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  link: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface ResumeDocumentLng {
  id: XmlElem<string | null>;
  /** Иностранный язык */
  lng_id: XmlElem<string | null, typeof common.languages>;
  /** Степень владения */
  level: XmlElem<number | null, typeof common.language_levels>;
}

interface ResumeDocumentView extends DescBase {
  /** @temp */
  person_id: XmlElem<number | null>;
}

type ResumeDocumentTopElem = XmlTopElem &
MsPersonSdBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ResumeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Является кандидатом
   * @default false
   */
  is_candidate: XmlElem<boolean>;
  /** Оценивающий */
  creator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
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
  /** Пол */
  sex: XmlElem<string | null>;
  /** Семейное положение */
  family_status: XmlElem<string | null>;
  /** Дата рождения */
  birth_date: XmlElem<Date | null>;
  academic_degree: XmlElem<string | null>;
  academic_heading: XmlElem<string | null>;
  /** Регион */
  location_id: XmlElem<string | null>;
  /** Адрес */
  address: XmlElem<string | null>;
  region: XmlElem<string | null>;
  city: XmlElem<string | null>;
  /** Домашний телефон */
  phone: XmlElem<string | null>;
  /** Рабочий телефон */
  work_phone: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  /** Зарплата от */
  min_wage: XmlElem<number | null>;
  /** Зарплата до */
  max_wage: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  email: XmlElem<string | null>;
  inet_uid: XmlElem<string | null>;
  /** Профессиональная область */
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  /** Профессиональная область */
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  /** Специальность по диплому */
  professional_area_type_id: XmlElem<string | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
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
  /** Предпочтительные регионы переезда */
  relocate_name: XmlElem<string | null>;
  children_num: XmlElem<number | null>;
  /** Образование */
  educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  /** Образование */
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  /** Требуемые навыки */
  skills: XmlMultiElem<ResumeDocumentSkill | null>;
  /**
   * Архив
   * @default false
   */
  is_archive: XmlElem<boolean>;
  /** Профессиональный опыт */
  work_experiences: XmlMultiElem<ResumeDocumentWorkExperience | null>;
  /** Образование */
  educations: XmlMultiElem<ResumeDocumentEducation | null>;
  projects: XmlMultiElem<ResumeDocumentProject | null>;
  publications: XmlMultiElem<ResumeDocumentPublication | null>;
  citizenship: XmlElem<string | null>;
  /** Родной язык */
  main_lng: XmlElem<string | null, typeof common.languages>;
  /** Владение языками */
  lngs: XmlMultiElem<ResumeDocumentLng | null>;
  /** Ключевые навыки */
  dominant_skills: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** HTML-описание резюме */
  html_resume: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ResumeDocumentView | null>;
};

type ResumeDocument = XmlDocument & {
  TopElem: ResumeDocumentTopElem;
  resume: ResumeDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
