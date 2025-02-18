interface EventDocumentTest {
  /** @default com.websoft.vclass.vo.test.Test */
  class: XmlElem<string | null>;
  /** Текущий тест */
  id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  title: XmlElem<string | null>;
  /** @default inactive */
  state: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  duration: XmlElem<number | null>;
}

interface EventDocumentRecord {
  /** @default com.websoft.vclass.vo.record.RecordInfo */
  class: XmlElem<string | null>;
  status: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  recorder_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  data: XmlElem<string | null>;
  width: XmlElem<string | null>;
  height: XmlElem<string | null>;
}

interface EventDocumentWebinarSetting {
  name: XmlElem<string | null>;
  /** @default string */
  type: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface EventDocumentWebinarSystemField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface EventDocumentEventForm {
  form_id: XmlElem<string | null, typeof lists.event_forms>;
}

interface EventDocumentStage {
  stage_id: XmlElem<number | null>;
  parent_id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /**
   * Доступен
   * @default false
   */
  is_active: XmlElem<boolean | null>;
}

interface EventDocumentCollaboratorExpenseItem {
  /** @temp */
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /**
   * @temp
   * @default 0.0
   */
  sum: XmlElem<number | null>;
}

interface EventDocumentCollaboratorResultColumn {
  column_name: XmlElem<string | null>;
  column_value: XmlElem<string | null>;
}

interface EventDocumentCollaboratorResult {
  /** @temp */
  id: XmlElem<number | null>;
  /** @temp */
  is_assist: XmlElem<string | null>;
  /** @temp */
  is_confirm: XmlElem<string | null>;
  /** @temp */
  is_banned: XmlElem<string | null>;
  /** @temp */
  not_participate: XmlElem<string | null>;
  /** @temp */
  score: XmlElem<number | null>;
  columns: XmlMultiElem<EventDocumentCollaboratorResultColumn | null>;
}

interface EventDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  last_exist_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  request_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number | null, ActiveTestLearningCatalogDocumentTopElem>;
  controller_code: XmlElem<string | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
  /** @temp */
  expense_items: XmlMultiElem<EventDocumentCollaboratorExpenseItem | null>;
  /** @temp */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /**
   * @temp
   * @default 0.0
   */
  total_sum: XmlElem<number | null>;
  /** @default false */
  not_pay: XmlElem<boolean | null>;
  /** @default false */
  can_use_camera: XmlElem<boolean | null>;
  /** @default false */
  can_use_microphone: XmlElem<boolean | null>;
  /** @temp */
  result: XmlElem<EventDocumentCollaboratorResult | null>;
  /** @temp */
  current_state: XmlElem<string | null>;
  /** @temp */
  edu_group_name: XmlElem<string | null>;
}

interface EventDocumentUnnamedPersonByOrg {
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string | null>;
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  /** Ответственный */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
}

interface EventDocumentEvenPreparation {
  even_preparation_id: XmlElem<string | null>;
  /** Ответственный за выполнение */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО ответственного */
  person_fullname: XmlElem<string | null>;
  /** Плановая дата */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата */
  fact_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string, typeof common.event_status_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Комментарий ответственного */
  comment_person: XmlElem<string | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentHitt {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Пульт руководителя */
  tutor_controller_code: XmlElem<string | null>;
  /** Инструкция */
  instruction: XmlElem<string | null>;
  /**
   * Автопереход на следующий вопрос при ответе всех тестируемых
   * @default false
   */
  auto_next_all_answer: XmlElem<boolean>;
  /**
   * Автоматически завершать тесты после завершения тестирования
   * @default false
   */
  auto_finish_test: XmlElem<boolean>;
  /**
   * Использовать уже активированные тесты для записи результатов
   * @default true
   */
  use_activated_test: XmlElem<boolean>;
  /** Номер COM порта */
  port_num: XmlElem<number | null>;
  /**
   * Количество колонок
   * @default 1
   */
  column_num: XmlElem<number>;
  /**
   * Размер шрифта
   * @default 18
   */
  font_size: XmlElem<number>;
}

interface EventDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface EventDocumentTutor extends PersonFillingBase {
  /** Ответственный за проведение */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  telephone_out: XmlElem<string | null>;
  telephone_in: XmlElem<string | null>;
  /**
   * Является основным
   * @default false
   */
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentObjectResourceObjectResourceIdSd {
  /** Название ресурса */
  name: XmlElem<string | null>;
  /** Тип ресурса */
  type: XmlElem<string | null, typeof lists.object_resource_types>;
}

interface EventDocumentObjectResourceObjectResourceId {
  sd: XmlElem<EventDocumentObjectResourceObjectResourceIdSd | null> & XmlElem<number>;
}

interface EventDocumentObjectResource {
  object_resource_id: XmlElem<EventDocumentObjectResourceObjectResourceId | null, ObjectResourceCatalogDocumentTopElem>;
}

interface EventDocumentContract extends CostCurrencyBase {
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Название юридического лица */
  legal_entity_name: XmlElem<string | null>;
  /** Юридическое лицо из списка */
  legal_entity_code: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
}

interface EventDocumentExpenseItem {
  /** Статья затрат */
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /**
   * Сумма
   * @default 0.0
   */
  sum: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  /**
   * @temp
   * @default 0.0
   */
  total_sum: XmlElem<number | null>;
}

interface EventDocumentFile extends FileBase {
  presentation_id: XmlElem<number | null>;
  /** @default all */
  visibility: XmlElem<string, typeof common.event_file_visibility_types>;
}

interface EventDocumentLibraryMaterial {
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
}

interface EventDocumentLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EventDocumentRegularScheduleExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /**
   * Сумма
   * @default 0.0
   */
  sum: XmlElem<number | null>;
}

interface EventDocumentRegularSchedule extends MsWeekScheduleBase {
  /** Период с */
  start_date: XmlElem<Date | null>;
  /** Период по */
  finish_date: XmlElem<Date | null>;
  /** Статьи затрат */
  expense_items: XmlMultiElem<EventDocumentRegularScheduleExpenseItem | null>;
  /**
   * @temp
   * Общая сумма
   * @default 0.0
   */
  expense_sum: XmlElem<number | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** @default person */
  cost_center_type: XmlElem<string>;
  /**
   * Общая стоимость всех этапов
   * @default 0.0
   */
  total_cost: XmlElem<number | null>;
  phases_num: XmlElem<number | null>;
}

interface EventDocumentPhaseCollaborator {
  collaborator_id: XmlElem<number | null>;
  /** @default true */
  is_assist: XmlElem<boolean>;
}

interface EventDocumentPhase {
  id: XmlElem<string | null>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  /** @temp */
  reserve_desc: XmlElem<string | null>;
  collaborators: XmlMultiElem<EventDocumentPhaseCollaborator | null>;
}

interface EventDocumentViewCollaborator {
  /** @temp */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface EventDocumentViewLector {
  /** @temp */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
}

interface EventDocumentViewTutor {
  /** @temp */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface EventDocumentViewEvenPreparation {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface EventDocumentViewAssessmentPlan {
  /** @temp */
  assessment_plan_id: XmlElem<number | null, EventAssessmentPlanCatalogDocumentTopElem>;
}

interface EventDocumentViewLearningSummaryCollaboratorResult {
  id: XmlElem<number | null>;
  is_assist: XmlElem<string | null>;
  is_confirm: XmlElem<string | null>;
  /** @temp */
  not_participate: XmlElem<string | null>;
  score: XmlElem<number | null>;
}

interface EventDocumentViewLearningSummaryCollaboratorCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** @default 0 */
  active_learning_num: XmlElem<number>;
  active_learning_state_id: XmlElem<number | null, typeof common.learning_states>;
  /** @default 0 */
  learning_num: XmlElem<number>;
  learning_state_id: XmlElem<number | null, typeof common.learning_states>;
}

interface EventDocumentViewLearningSummaryCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @default false */
  is_participant: XmlElem<boolean>;
  result: XmlElem<EventDocumentViewLearningSummaryCollaboratorResult | null>;
  courses: XmlMultiElem<EventDocumentViewLearningSummaryCollaboratorCourse | null>;
  active_learning_state_name: XmlElem<string | null>;
  /** @default 0 */
  learning_num: XmlElem<number>;
  learning_state_name: XmlElem<string | null>;
  bk_color: XmlElem<string | null>;
}

interface EventDocumentViewLearningSummaryCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface EventDocumentViewLearningSummary {
  /** @temp */
  collaborators: XmlMultiElem<EventDocumentViewLearningSummaryCollaborator | null>;
  /** @temp */
  courses: XmlMultiElem<EventDocumentViewLearningSummaryCourse | null>;
  /** @temp */
  course_id: XmlElem<number | null>;
  /**
   * @temp
   * @default all
   */
  person_filter: XmlElem<string>;
}

interface EventDocumentView extends DescBase {
  /** @temp */
  name: XmlElem<string | null>;
  /** @temp */
  start_date: XmlElem<Date | null>;
  /** @temp */
  finish_date: XmlElem<Date | null>;
  /** @temp */
  webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  /**
   * @temp
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /**
   * @temp
   * @default 0.0
   */
  total_sum: XmlElem<number | null>;
  /** @temp */
  unnamed_person_total_sum: XmlElem<number | null>;
  /**
   * @temp
   * @default false
   */
  is_load_results: XmlElem<boolean>;
  /**
   * @temp
   * @default false
   */
  show_result_fields: XmlElem<boolean>;
  /**
   * @temp
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * @temp
   * @default false
   */
  checked_fields: XmlElem<boolean>;
  /** @default date */
  sort_type_id: XmlElem<string>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** @temp */
  collaborators: XmlMultiElem<EventDocumentViewCollaborator | null>;
  /** @temp */
  lectors: XmlMultiElem<EventDocumentViewLector | null>;
  /** @temp */
  tutors: XmlMultiElem<EventDocumentViewTutor | null>;
  /** @temp */
  even_preparations: XmlMultiElem<EventDocumentViewEvenPreparation | null>;
  /** @temp */
  assessment_plans: XmlMultiElem<EventDocumentViewAssessmentPlan | null>;
  /** @temp */
  loop_date: XmlElem<Date | null>;
  /** @temp */
  loop_index: XmlElem<number | null>;
  /** @temp */
  last_start_date: XmlElem<Date | null>;
  /** @temp */
  last_finish_date: XmlElem<Date | null>;
  /** @temp */
  last_distribute_cost_type: XmlElem<string | null>;
  /** @temp */
  last_default_event_result_type_id: XmlElem<number | null>;
  /**
   * @temp
   * @default all
   */
  recource_selector: XmlElem<string>;
  /**
   * @temp
   * @default time
   */
  recource_tab_selector: XmlElem<string>;
  /** @temp */
  result_array: XmlElem<unknown | null>;
  /** @temp */
  collaborator_array: XmlElem<unknown | null>;
  /** @temp */
  learning_summary: XmlElem<EventDocumentViewLearningSummary | null>;
  /**
   * @temp
   * @default false
   */
  flag_open_org_sub_group_section: XmlElem<boolean>;
}

interface EventDocumentNotificationReminder {
  id: XmlElem<string | null>;
  /** Минут до начала мероприятия */
  minutes: XmlElem<number | null>;
  /**
   * Напоминания отправлены
   * @default false
   */
  sended: XmlElem<boolean | null>;
}

type EventDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EducGroupsBase &
PathPlacesBase &
CostCurrencyTypeBase &
CostCentersBase &
LectorsBase &
GameBonusBase &
EduMethodTestingBase &
KnowledgePartsBase &
CustomElemsBase &
CustomDatasBase &
CatalogListBase &
AdminAccessBase &
EventSettingsBase & {
  Doc: EventDocument;
  /**
   * Тип
   * @default one_time
   */
  type_id: XmlElem<string, typeof common.event_types>;
  /** Тип */
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Эталонное мероприятие
   * @default false
   */
  is_model: XmlElem<boolean>;
  /**
   * Is room
   * @default false
   */
  is_room: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Место проведения */
  place: XmlElem<string | null>;
  /** Сервер Виртуального класса */
  vclass_host: XmlElem<string | null>;
  /** @default false */
  use_camera_capture: XmlElem<boolean>;
  /** @default false */
  login_with_camera_only: XmlElem<boolean>;
  /** @default 180 */
  capture_rate: XmlElem<number>;
  /** Статус записи */
  record_status: XmlElem<string | null>;
  /**
   * Вебинар не записан
   * @default false
   */
  record_exists: XmlElem<boolean>;
  record_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата записи */
  record_date: XmlElem<Date | null>;
  /**
   * Количество скачиваний
   * @default 0
   */
  record_download_count: XmlElem<number | null>;
  /**
   * Количество просмотров
   * @default 0
   */
  record_view_count: XmlElem<number | null>;
  /**
   * Ширина канала для видео
   * @default 2048
   */
  bandwidth: XmlElem<number | null>;
  /**
   * Делать снимки с камеры во время просмотра записи
   * @default false
   */
  use_record_camera_capture: XmlElem<boolean>;
  /**
   * Разрешить просмотр записи только при наличии веб-камеры
   * @default false
   */
  view_with_camera_only: XmlElem<boolean>;
  /** @default 180 */
  record_capture_rate: XmlElem<number>;
  /** Текущая презентация */
  current_presentation_id: XmlElem<number | null>;
  /** Система вебинаров */
  webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  test: XmlElem<EventDocumentTest | null>;
  record: XmlElem<EventDocumentRecord | null>;
  webinar_settings: XmlMultiElem<EventDocumentWebinarSetting | null>;
  webinar_system_fields: XmlMultiElem<EventDocumentWebinarSystemField | null>;
  /**
   * Использовать виртуальный класс
   * @default false
   */
  use_vclass: XmlElem<boolean>;
  /** Виртуальный класс */
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /**
   * Запись доступна для просмотра
   * @default false
   */
  show_record: XmlElem<boolean>;
  /** @default false */
  allow_record_download: XmlElem<boolean>;
  /**
   * Использовать резервный сервер
   * @default true
   */
  use_reserve_server: XmlElem<boolean>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Использовать резервный сервер */
  program_id: XmlElem<number | null>;
  create_compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  training_plan_id: XmlElem<number | null, TrainingPlanCatalogDocumentTopElem>;
  /** Организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** @default name */
  education_org_type: XmlElem<string | null>;
  /** Название организации */
  education_org_name: XmlElem<string | null>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Чат */
  chat_id: XmlElem<number | null, ChatCatalogDocumentTopElem>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /**
   * Публичное мероприятие
   * @default false
   */
  is_public: XmlElem<boolean>;
  /**
   * Открытое мероприятие
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** @default false */
  allow_guest_login: XmlElem<boolean>;
  /** Ограничения для гостевого входа */
  guest_restrictions: XmlElem<number | null>;
  /** @default false */
  is_open_case: XmlElem<boolean>;
  /** @default false */
  public_answers: XmlElem<boolean>;
  /** Планируемое количество часов */
  duration_plan: XmlElem<number | null>;
  /** Планируемое количество дней */
  duration_days_plan: XmlElem<number | null>;
  /** Фактическое количество часов */
  duration_fact: XmlElem<number | null>;
  /** Фактическое количество дней */
  duration_days_fact: XmlElem<number | null>;
  /** Максимальное количество участников */
  max_person_num: XmlElem<number | null>;
  /** Минимальное количество участников */
  min_person_num: XmlElem<number | null>;
  person_num(): unknown;
  assist_person_num(): unknown;
  /** Завершенных курсов */
  course_finished: XmlElem<number | null>;
  /** Активных курсов */
  course_process: XmlElem<number | null>;
  /** Неначатых курсов */
  course_started: XmlElem<number | null>;
  /** Начатых курсов */
  course_began: XmlElem<number | null>;
  /** Завершенных тестов */
  test_finished: XmlElem<number | null>;
  /** Активных тестов */
  test_process: XmlElem<number | null>;
  /** Неначатых тестов */
  test_started: XmlElem<number | null>;
  /** Начатых тестов */
  test_began: XmlElem<number | null>;
  /** Ответственный */
  tutor_main: XmlElem<string | null>;
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Организационная форма */
  organizational_form: XmlElem<string | null, typeof lists.organizational_forms>;
  /** Форма проведения */
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  /** Формы проведения */
  event_forms: XmlMultiElem<EventDocumentEventForm | null>;
  /** Этапы */
  stages: XmlMultiElem<EventDocumentStage | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Сотрудники */
  collaborators: XmlMultiElem<EventDocumentCollaborator | null>;
  /** Группа обучения */
  group_educ_group_id: XmlElem<string | null>;
  /** Неименованные участники по организациям */
  unnamed_person_by_orgs: XmlMultiElem<EventDocumentUnnamedPersonByOrg | null>;
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  /**
   * Группа сформирована
   * @default false
   */
  group_formed: XmlElem<boolean>;
  /** Квота на организацию */
  quota_org: XmlElem<number | null>;
  /** Квота на подразделение */
  quota_subdivision: XmlElem<number | null>;
  /** Квота на заявителя */
  quota_person: XmlElem<number | null>;
  /** Подготовка мероприятия */
  even_preparations: XmlMultiElem<EventDocumentEvenPreparation | null>;
  /** Тестирование с ДУ */
  hitt: XmlElem<EventDocumentHitt | null>;
  /** Группы */
  groups: XmlMultiElem<EventDocumentGroup | null>;
  /** Ответственные за проведение */
  tutors: XmlMultiElem<EventDocumentTutor | null>;
  /** Оборудование */
  object_resources: XmlMultiElem<EventDocumentObjectResource | null>;
  /**
   * Общая стоимость
   * @default 0.0
   */
  total_cost: XmlElem<number | null>;
  /**
   * Планируемая общая стоимость
   * @default 0.0
   */
  total_cost_plan: XmlElem<number | null>;
  /** Договоры */
  contracts: XmlMultiElem<EventDocumentContract | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** @default person */
  cost_center_type: XmlElem<string>;
  default_cost_center_id(): unknown;
  /**
   * Распределение общей стоимости
   * @default person
   */
  distribute_cost_type: XmlElem<string>;
  /** Статьи затрат */
  expense_items: XmlMultiElem<EventDocumentExpenseItem | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  files: XmlMultiElem<EventDocumentFile | null>;
  library_materials: XmlMultiElem<EventDocumentLibraryMaterial | null>;
  learning_tasks: XmlMultiElem<EventDocumentLearningTask | null>;
  AddFile(resourceId: number, resource: ResourceDocument): void;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /**
   * Обязательное заполнение отзыва
   * @default false
   */
  mandatory_fill_response: XmlElem<boolean>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /**
   * Использовать документооборот учебной программы
   * @default false
   */
  use_object_workflow: XmlElem<boolean | null>;
  /** Тип результата по умолчанию */
  default_event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /** Основной материал */
  main_material_url: XmlElem<string | null>;
  /**
   * Ширина
   * @default 100%
   */
  main_material_width: XmlElem<string | null>;
  /**
   * Высота
   * @default 80px
   */
  main_material_height: XmlElem<string | null>;
  /**
   * Показывать видео
   * @default false
   */
  use_video: XmlElem<boolean>;
  /** Путь к видео */
  video_url: XmlElem<string | null>;
  /** Логин */
  video_login: XmlElem<string | null>;
  /** Пароль */
  video_password: XmlElem<string | null>;
  /**
   * Показывать аудио
   * @default false
   */
  use_audio: XmlElem<boolean>;
  /** Путь к аудио */
  audio_url: XmlElem<string | null>;
  /** Название аудио канала */
  audio_channel_login: XmlElem<string | null>;
  /** Пароль аудио канала */
  audio_channel_password: XmlElem<string | null>;
  /** Логин пользователя аудио канала */
  audio_login: XmlElem<string | null>;
  /** Пароль пользователя аудио канала */
  audio_password: XmlElem<string | null>;
  /** Дата начала подачи заявок */
  date_request_begin: XmlElem<Date | null>;
  /** Дата окончания подачи заявок */
  date_request_over: XmlElem<Date | null>;
  /** Дата окончания возможности отмены участия */
  date_request_rejection_over: XmlElem<Date | null>;
  parent_event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Расписание */
  regular_schedule: XmlElem<EventDocumentRegularSchedule | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  get_chat_messages(dtLastMessage: unknown): unknown;
  send_chat_message(text: string, fullname: string): unknown;
  phases: XmlMultiElem<EventDocumentPhase | null>;
  /** @default false */
  disp_collaborator_phase_presence: XmlElem<boolean>;
  /** @default false */
  disp_persons_for_all: XmlElem<boolean | null>;
  /** @default false */
  has_lector_appraise: XmlElem<boolean | null>;
  /** @default false */
  has_lector_comp: XmlElem<boolean | null>;
  /** @default false */
  has_lector_quest: XmlElem<boolean | null>;
  lector_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /** @default Date() */
  lector_date_start: XmlElem<Date | null>;
  /** @default false */
  has_self_appraise: XmlElem<boolean | null>;
  /** @default false */
  has_self_comp: XmlElem<boolean | null>;
  /** @default false */
  has_self_quest: XmlElem<boolean | null>;
  self_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /** @default Date() */
  self_date_start: XmlElem<Date | null>;
  /** @default false */
  has_manager_appraise: XmlElem<boolean | null>;
  /** @default false */
  has_manager_comp: XmlElem<boolean | null>;
  /** @default false */
  has_manager_quest: XmlElem<boolean | null>;
  manager_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /** @default Date() */
  manager_date_start: XmlElem<Date | null>;
  /** @default true */
  disp_all_assessment_plan: XmlElem<boolean | null>;
  /** @temp */
  view: XmlElem<EventDocumentView | null>;
  /** @default false */
  need_create_results: XmlElem<boolean>;
  set_status(newStatus: string, sendNotifications: boolean, screen: Object): unknown;
  send_notifications(sendType: string): unknown;
  create_results(): unknown;
  change_tutor_list(): unknown;
  change_even_preparation_list(): unknown;
  change_lector_list(): unknown;
  obtain_collaborator(personId: number, person: CollaboratorDocument): unknown;
  add_group(groupId: number): unknown;
  get_workflow_id(): unknown;
  create_certificate(typeId: number, typeDoc: unknown, createByNotAssist: boolean): unknown;
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
  start_action(type: string, grIdItemName: unknown): unknown;
  clear_elems(): unknown;
  activate_test(testId: number, test: AssessmentDocument, duration: unknown, startLearningDate: unknown, lastLearningDate: unknown, actType: string, skipDismissed: boolean, useProctoring: boolean, proctorPreferId: number, activateOnlyAssist: boolean): unknown;
  assign_qualification(qualificationId: number, assignmentDate: unknown, expirationDate: unknown, sendMail: unknown): unknown;
  check_request_quote(requestId: number, request: RequestDocument): unknown;
  create_event_phases(): unknown;
  filling_event_phases(): unknown;
  distribute_cost_centers(): unknown;
  distribute_total_cost(): unknown;
  obtain_pay_phases(): unknown;
  save_distributed_total_cost(resultArray: unknown): unknown;
  calc_duration_plan(): unknown;
  update_event_results(): unknown;
  update_collaborator_common_filling(): unknown;
  addPerson(input: Object): unknown;
  delPerson(input: Object): unknown;
  changeTutorList(input: Object): unknown;
  get_info(): unknown;
  remove_collaborator(personId: number): unknown;
  get_webinar_admin_template(): unknown;
  call_webinar_system_method(methodName: string, params: Object, reloadDocument: boolean): unknown;
  get_webinar_setting(settingName: string, settingType: string): unknown;
  set_webinar_setting(settingName: string, settingValue: string, settingType: string): unknown;
  get_webinar_url(userId: number, url: string): unknown;
  get_webinar_record_url(currentHost: string): unknown;
  get_webinar_record_download_url(currentHost: string): unknown;
  get_finish_date(newDate: string): unknown;
  /** Настройки уведомлений до начала мероприятия */
  notification_reminders: XmlMultiElem<EventDocumentNotificationReminder | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type EventDocument = XmlDocument & {
  TopElem: EventDocumentTopElem;
  event: EventDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): unknown;
  OnInit(): unknown;
  OnClientSave(): unknown;
  OnLocalInit(): unknown;
  DocDesc(): string;
};
