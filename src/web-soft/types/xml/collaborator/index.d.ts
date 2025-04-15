interface CollaboratorDocumentChangeLog extends CustomElemsBase {
  id: XmlElem<string | null>;
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
  /** Дата */
  date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Общее время отработки в днях */
  working_days: XmlElem<number | null>;
  /** Общее время отработки в часах */
  working_hours: XmlElem<number | null>;
  /** Ставка */
  rate: XmlElem<number | null>;
  /** Процент ставки */
  rate_percent: XmlElem<number | null>;
}

interface CollaboratorDocumentHistoryState {
  id: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof lists.person_states>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface CollaboratorDocumentPersonalConfig {
  /** URL аватара (относительно [Server]/wt/web/avatars) */
  avatar_filename: XmlElem<string | null>;
  /** Псевдоним */
  nick: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null>;
  /**
   * Как отображать автора
   * @default realname
   */
  default_info_type: XmlElem<string, typeof common.forum_person_info_types>;
}

interface CollaboratorDocumentCustomParam {
  /** Название */
  name: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
}

interface CollaboratorDocumentCompBenPaymentType {
  /** Тип выплат */
  payment_type_id: XmlElem<number | null, PaymentTypeCatalogDocumentTopElem>;
  /** Максимальное значение */
  max_value: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface CollaboratorDocumentCompBen {
  /** Зарплата */
  salary: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /**
   * Период выплаты
   * @default month
   */
  payment_period: XmlElem<string | null, typeof common.perioditys>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Возможные типы выплат */
  payment_types: XmlMultiElem<CollaboratorDocumentCompBenPaymentType | null>;
}

interface CollaboratorDocumentViewCard {
  /**
   * @temp
   * @default false
   */
  is_preview: XmlElem<boolean | null>;
}

interface CollaboratorDocumentView extends DescBase {
  /** @temp */
  card: XmlElem<CollaboratorDocumentViewCard | null>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /**
   * @temp
   * @default false
   */
  is_admin: XmlElem<boolean>;
  /** @temp */
  user_id: XmlElem<number | null>;
  /** @temp */
  position_array: XmlElem<unknown | null>;
  get_position_array(): unknown;
  /** @temp */
  position_doc_ref: XmlElem<unknown | null>;
  /** @default false */
  never_saved: XmlElem<boolean>;
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
  /**
   * @temp
   * @default true
   */
  disp_access: XmlElem<boolean>;
  /**
   * @temp
   * @default true
   */
  disp_auth: XmlElem<boolean>;
  /**
   * @temp
   * @default false
   */
  drop_pers_hier_entry: XmlElem<boolean | null>;
}

interface CollaboratorDocumentLastData {
  /**
   * Временно запрещен доступ на портал
   * @default false
   */
  web_banned: XmlElem<boolean>;
  /** Логин */
  login: XmlElem<string | null>;
  /** Пароль */
  password: XmlElem<string | null>;
  /** Роль доступа */
  access_role: XmlElem<string | null>;
  /**
   * Является пользователем интерфейса администратора
   * @default false
   */
  is_arm_admin: XmlElem<boolean>;
  /**
   * Является пользователем приложений
   * @default false
   */
  is_application_admin: XmlElem<boolean>;
  /**
   * Является редактором контента
   * @default false
   */
  is_content_admin: XmlElem<boolean>;
  /**
   * В "черном списке" на подачу заявок
   * @default false
   */
  in_request_black_list: XmlElem<boolean>;
  /** Должность */
  position_id: XmlElem<number | null>;
  /** URL к файлу фотографии */
  pict_url: XmlElem<string | null>;
  /** URL аватара (относительно [Server]/wt/web/avatars) */
  avatar_filename: XmlElem<string | null>;
}

type CollaboratorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
FileListBase &
FuncManagersBase &
PathSubsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
PersonObjectLinksBase & {
  Doc: CollaboratorDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Внешний ID */
  eid: XmlElem<string | null>;
  /** ФИО */
  name(): string;
  /** Снилс */
  snils: XmlElem<string | null>;
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
  /**
   * Сменить пароль при первом входе
   * @default false
   */
  change_password: XmlElem<boolean>;
  /**
   * Является кандидатом
   * @default false
   */
  is_candidate: XmlElem<boolean>;
  /**
   * Является временным
   * @default false
   */
  is_outstaff: XmlElem<boolean>;
  /** Статус кандидата */
  candidate_status_type_id: XmlElem<number | null, CandidateStatusTypeCatalogDocumentTopElem>;
  /** Кандидат */
  candidate_id: XmlElem<number | null>;
  /**
   * Является уволенным
   * @default false
   */
  is_dismiss: XmlElem<boolean>;
  /** Дата приема */
  hire_date: XmlElem<Date | null>;
  /** Дата увольнения */
  dismiss_date: XmlElem<Date | null>;
  /** Дата вступления в должность */
  position_date: XmlElem<Date | null>;
  /**
   * В "черном списке" на подачу заявок
   * @default false
   */
  in_request_black_list: XmlElem<boolean>;
  /** Дата включения в "черный список" */
  request_black_list_data: XmlElem<Date | null>;
  /** Комментарий включения в "черный список" */
  request_black_list_comment: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  access: XmlElem<AccessBase | null>;
  /** Должность */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  provider_legal_id: XmlElem<string | null>;
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null>;
  /** Расположение файлов учебных материалов */
  location_id: XmlElem<string | null, typeof lists.locations>;
  /** URL к файлу фотографии */
  pict_url: XmlElem<string | null>;
  /** Время доступа с */
  access_time_start: XmlElem<string | null>;
  /** Время доступа по */
  access_time_end: XmlElem<string | null>;
  is_time_access(): boolean;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Отображать незаполненные поля
   * @default false
   */
  disp_empty_fields: XmlElem<boolean>;
  /**
   * Отображать контактную информацию и фото
   * @default true
   */
  disp_personal_info: XmlElem<boolean>;
  /**
   * Отображать логин
   * @default true
   */
  disp_login: XmlElem<boolean>;
  /**
   * Отображать пол
   * @default true
   */
  disp_sex: XmlElem<boolean>;
  /**
   * Отображать описание
   * @default false
   */
  disp_desc: XmlElem<boolean>;
  /**
   * Отображать файлы
   * @default false
   */
  disp_files: XmlElem<boolean>;
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
  /**
   * Отображать резюме
   * @default false
   */
  disp_resume: XmlElem<boolean>;
  /**
   * Разрешить приглашение пользователя к общению
   * @default true
   */
  allow_personal_chat_request: XmlElem<boolean>;
  /**
   * Для общения в персональном чате требуется подтверждение
   * @default true
   */
  personal_chat_confirmation_required: XmlElem<boolean>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /** Дата первого входа на портал */
  web_enter_date: XmlElem<Date | null>;
  /** Категория */
  category_id: XmlMultiElemObject<string | null, CategoryCatalogDocumentTopElem>;
  change_logs: XmlMultiElem<CollaboratorDocumentChangeLog | null>;
  /** Текущее состояние */
  current_state: XmlElem<string | null>;
  /** Список состояний сотрудника */
  history_states: XmlMultiElem<CollaboratorDocumentHistoryState | null>;
  /** Настройки портала */
  personal_config: XmlElem<CollaboratorDocumentPersonalConfig | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Дата последнего импорта */
  last_import_date: XmlElem<Date | null>;
  /** Служебные данные */
  custom_params: XmlMultiElem<CollaboratorDocumentCustomParam | null>;
  /** Уровень компетентности */
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  /** Грейд */
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  comp_ben: XmlElem<CollaboratorDocumentCompBen | null>;
  /** @default false */
  gdpr: XmlElem<boolean>;
  /**
   * Согласие на КЭДО
   * @default false
   */
  consent_kedo: XmlElem<boolean>;
  /** Дата согласия на КЭДО */
  consent_kedo_date: XmlElem<Date | null>;
  /** @temp */
  view: XmlElem<CollaboratorDocumentView | null>;
  /** Сохраненные данные */
  last_data: XmlElem<CollaboratorDocumentLastData | null>;
  clear_cur_position(): void;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default person_fullname
   */
  row_disp_elem: XmlElem<string>;
  /**
   * @temp
   * @default .Env.ListElem
   */
  row_list_field: XmlElem<string | null>;
  /**
   * @temp
   * @default .PrimaryKey
   */
  row_key_field: XmlElem<string | null>;
  /** @temp */
  list_variant: XmlElem<unknown | null>;
  start_action(type: string): number;
  set_basic_position(positionId: number): boolean;
  get_courses(type: string): (ActiveLearningCatalogDocumentTopElem | LearningCatalogDocumentTopElem)[];
  get_tests(type: string): (ActiveTestLearningCatalogDocumentTopElem | TestLearningCatalogDocumentTopElem)[];
  assign_course(courseId: number, start: Date, end: Date, eventId: number): number;
  assign_test(testId: number, start: Date, end: Date, eventId: number): number;
  get_info(): null | Object;
  get_events(type: string, status: string, roleCollab: string): EventCollaboratorCatalogDocumentTopElem[];
  get_groups(): GroupCollaboratorCatalogDocumentTopElem[];
  get_event_results(): EventResultCatalogDocumentTopElem[];
  update_info(lastname: string, firstname: string, middlename: string, address: string, phone: string, email: string, login: string, password: string): Object;
  clear_subs_fields(): void;
};

type CollaboratorDocument = XmlDocument & {
  TopElem: CollaboratorDocumentTopElem;
  collaborator: CollaboratorDocumentTopElem;
  OnCreate(): void;
  OnSave(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
