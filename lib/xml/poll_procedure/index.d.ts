interface PollProcedureDocumentAuditoryPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentAuditory {
  /** ID оцениваемого сотрудника */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_name: XmlElem<string | null>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Группы опросов */
  poll_groups: XmlMultiElem<PollProcedureDocumentAuditoryPollGroup | null>;
  responsible_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  responsible_person_fullname: XmlElem<string | null>;
}

interface PollProcedureDocumentSubdivisionPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название подразделения */
  subdivision_name: XmlElem<string | null>;
  /** Ответственный */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО ответственного */
  person_fullname: XmlElem<string | null>;
  /** @default false */
  confirmation: XmlElem<boolean>;
  /** Кол-во */
  max_auditory: XmlElem<number | null>;
  /** Группа опросов */
  poll_groups: XmlMultiElem<PollProcedureDocumentSubdivisionPollGroup | null>;
}

interface PollProcedureDocumentGroupPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  group_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО ответственного */
  person_fullname: XmlElem<string | null>;
  /** Кол-во */
  max_auditory: XmlElem<number | null>;
  /** Группа опросов */
  poll_groups: XmlMultiElem<PollProcedureDocumentGroupPollGroup | null>;
}

interface PollProcedureDocumentPoll {
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupPoll {
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupCondition {
  id: XmlElem<string | null>;
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  question_id: XmlElem<number | null>;
  entry_id: XmlElem<number | null>;
  /** @default || */
  and_or: XmlElem<string>;
}

interface PollProcedureDocumentAdditionalPollGroup {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  polls: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupPoll | null>;
  conditions: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupCondition | null>;
}

interface PollProcedureDocumentAdditional {
  poll_groups: XmlMultiElem<PollProcedureDocumentAdditionalPollGroup | null>;
  reject_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  return_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  assigned_from_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  confirmation_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  responsibles_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  completion_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  /** @default true */
  show_after_completion: XmlElem<boolean>;
  server_agent_id: XmlElem<number | null, ServerAgentCatalogDocumentTopElem>;
  /**
   * @temp
   * @default false
   */
  show_tweaker: XmlElem<boolean>;
  custom_post_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_poll_generation: XmlElem<string | null>;
  mini_workflow_code: XmlElem<string | null>;
}

interface PollProcedureDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type PollProcedureDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollProcedureDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Ответственный за проведение */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Эталонная
   * @default false
   */
  is_model: XmlElem<boolean>;
  /**
   * Открытый тест (возможно самостоятельно назначить тест)
   * @default true
   */
  is_open: XmlElem<boolean>;
  /** Оцениваемые */
  auditorys: XmlMultiElem<PollProcedureDocumentAuditory | null>;
  /** Оцениваемые */
  subdivisions: XmlMultiElem<PollProcedureDocumentSubdivision | null>;
  /** Группы */
  groups: XmlMultiElem<PollProcedureDocumentGroup | null>;
  /** Опросы */
  polls: XmlMultiElem<PollProcedureDocumentPoll | null>;
  /**
   * Отображать на Портале
   * @default false
   */
  web_display: XmlElem<boolean>;
  /**
   * Статус
   * @default 0
   */
  status: XmlElem<number>;
  additional: XmlElem<PollProcedureDocumentAdditional | null>;
  periodity: XmlElem<MsPeriodityBase | null>;
  /** Сообщение при завершении */
  complete_message: XmlElem<string | null>;
  adaptive(): unknown;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<PollProcedureDocumentView | null>;
  set_poll_id(fldCondition: unknown): unknown;
  set_question_id(fldCondition: unknown, fldItem: unknown): unknown;
  update_poll_questionare(): unknown;
  get_person_poll_objs(curUserId: number): unknown;
  is_launch_person(curUserId: number): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Хэш эквивалентности */
  equal_hash: XmlElem<string | null>;
};

type PollProcedureDocument = XmlDocument & {
  TopElem: PollProcedureDocumentTopElem;
  poll_procedure: PollProcedureDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
