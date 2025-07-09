type CourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Статус
   * @default publish
   */
  status: XmlElem<string, typeof common.course_test_states>;
  /** Стоимость курса */
  price: XmlElem<number | null>;
  /** Проходной балл */
  mastery_score: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /**
   * Может быть назначен самостоятельно
   * @default true
   */
  yourself_start: XmlElem<boolean>;
  /** Продолжительность в днях */
  duration: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Эксперт курса */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Электронный курс */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Базовый url */
  base_url: XmlElem<string | null>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /**
   * Обязательное заполнение отзыва
   * @default false
   */
  mandatory_fill_response: XmlElem<boolean>;
  /**
   * Отображать отзывы
   * @default false
   */
  allow_disp_response: XmlElem<boolean>;
  /**
   * Отображать в списке Персонального WebSoft HCMa
   * @default false
   */
  pwt_disp: XmlElem<boolean>;
  /**
   * Тип плеера курсов
   * @default player
   */
  view_type: XmlElem<string>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
