interface ProjectDocumentParticipantTypeParticipantTypeObject {
  id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /**
   * Обязательный
   * @default false
   */
  is_required: XmlElem<boolean>;
}

interface ProjectDocumentParticipantType {
  /** Тип руководителя */
  participant_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Тип руководителя */
  participant_type_name: XmlElem<string | null>;
  participant_type_objects: XmlMultiElem<ProjectDocumentParticipantTypeParticipantTypeObject | null>;
}

interface ProjectDocumentParticipantRole {
  /** Роль участника проекта */
  participant_role_id: XmlElem<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
}

interface ProjectDocumentFile extends FileBase {
  /** @default all */
  visibility: XmlElem<string>;
}

interface ProjectDocumentView extends DescBase {
  /**
   * @temp
   * @default empty
   */
  tab_selector: XmlElem<string>;
  /**
   * @temp
   * @default collaborator
   */
  participant_catalog: XmlElem<string, typeof common.exchange_object_types>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type ProjectDocumentTopElem = XmlTopElem &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProjectDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Договор */
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Тип ресурса базы */
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  /** Тип проекта */
  project_type_id: XmlElem<number | null, ProjectTypeCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string, typeof common.project_status_types>;
  /**
   * Эталонный проект
   * @default false
   */
  is_model: XmlElem<boolean>;
  /** Плановые трудозатраты */
  plan_labor_costs: XmlElem<number | null>;
  /** Фактические трудозатраты */
  fact_labor_costs: XmlElem<number | null>;
  /** Процент выполнения */
  percent_complete: XmlElem<number | null>;
  /**
   * Команда подобрана
   * @default false
   */
  team_selected: XmlElem<boolean>;
  /**
   * Разрешить оценку участников после завершения проекта
   * @default false
   */
  allow_assessment: XmlElem<boolean>;
  /** Результаты */
  text_result: XmlElem<string | null>;
  /**
   * Тип вступления
   * @default close
   */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Планируемая дата начала */
  start_date_plan: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  end_date_plan: XmlElem<Date | null>;
  /** Фактическая дата начала */
  start_date_fact: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  end_date_fact: XmlElem<Date | null>;
  /**
   * Все участники могут видеть все задачи проекта
   * @default true
   */
  all_participant_view_task: XmlElem<boolean>;
  /**
   * Разрешать назначать задачи не участникам проекта
   * @default false
   */
  allow_assigning_tasks_to_all: XmlElem<boolean>;
  participant_types: XmlMultiElem<ProjectDocumentParticipantType | null>;
  participant_roles: XmlMultiElem<ProjectDocumentParticipantRole | null>;
  files: XmlMultiElem<ProjectDocumentFile | null>;
  AddFile(fileId: number): void;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<ProjectDocumentView | null>;
  set_status(newStatus: string, sendNotifications: boolean, screen: Object): void;
  create_project_participant(fldParticipant: unknown): unknown;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default fullname
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
};

type ProjectDocument = XmlDocument & {
  TopElem: ProjectDocumentTopElem;
  project: ProjectDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
