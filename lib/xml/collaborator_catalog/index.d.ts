type CollaboratorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  /** Логин */
  login: XmlElem<string | null>;
  /** Логин без домена */
  short_login: XmlElem<string | null>;
  /** Логин в нижнем регистре */
  lowercase_login: XmlElem<string | null>;
  /** Email */
  email: XmlElem<string | null>;
  /** Телефон */
  phone: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  /** Дата рождения */
  birth_date: XmlElem<Date | null>;
  /** Пол */
  sex: XmlElem<string | null>;
  /** URL к файлу фотографии */
  pict_url: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Подразделение */
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  position_parent_name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Категория */
  category_id: XmlMultiElemObject<string | null, CategoryCatalogDocumentTopElem>;
  /**
   * Запрещен доступ на портал
   * @default false
   */
  web_banned: XmlElem<boolean>;
  /**
   * Является пользователем интерфейса администратора
   * @default false
   */
  is_arm_admin: XmlElem<boolean>;
  /**
   * Является редактором контента
   * @default false
   */
  is_content_admin: XmlElem<boolean>;
  /**
   * Является пользователем приложений
   * @default false
   */
  is_application_admin: XmlElem<boolean>;
  /** Роль */
  role_id: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  /**
   * Является кандидатом
   * @default false
   */
  is_candidate: XmlElem<boolean>;
  /** Статус кандидата */
  candidate_status_type_id: XmlElem<number | null, CandidateStatusTypeCatalogDocumentTopElem>;
  /** Кандидат */
  candidate_id: XmlElem<number | null>;
  /**
   * Является временным
   * @default false
   */
  is_outstaff: XmlElem<boolean>;
  /**
   * Является уволенным
   * @default false
   */
  is_dismiss: XmlElem<boolean>;
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /** Дата приема */
  hire_date: XmlElem<Date | null>;
  /** Дата увольнения */
  dismiss_date: XmlElem<Date | null>;
  /**
   * В "черном списке" на подачу заявок
   * @default false
   */
  in_request_black_list: XmlElem<boolean>;
  /**
   * Разрешить приглашение пользователя к общению
   * @default true
   */
  allow_personal_chat_request: XmlElem<boolean>;
  /** Уровень компетентности */
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  /** Грейд */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  birth_date_rest_days_num(): number | null;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  person_object_profile_id: XmlMultiElemObject<number | null, PersonObjectProfileCatalogDocumentTopElem>;
  /** Текущее состояние */
  current_state: XmlElem<string | null>;
  /** Дата следующего изменения статуса сотрудника */
  next_state_date: XmlElem<Date | null>;
  /** Потенциал развития */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /**
   * Согласие на КЭДО
   * @default false
   */
  consent_kedo: XmlElem<boolean>;
  /** Дата согласия на КЭДО */
  consent_kedo_date: XmlElem<Date | null>;
  /** Код юридического лица */
  provider_legal_id: XmlElem<string | null>;
  /** Снилс */
  snils: XmlElem<string | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /**
   * Отображать дату рождения
   * @default true
   */
  disp_birthdate: XmlElem<boolean>;
  /**
   * Отображать год рождения
   * @default true
   */
  disp_birthdate_year: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
