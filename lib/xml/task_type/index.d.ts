interface TaskTypeDocumentRole {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
}

interface TaskTypeDocumentCustomState {
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Связанный этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Связанный этап документооборота */
  workflow_action_id: XmlElem<string | null>;
  /** Связанный системный статус */
  state_id: XmlElem<string | null, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlockParentTaskState {
  state_id: XmlElem<string | null, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlock {
  /** Тип родительской задачи */
  parent_task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  /**
   * Родительская задача обязательна
   * @default false
   */
  mandatory_parent_task: XmlElem<boolean>;
  parent_task_states: XmlMultiElem<TaskTypeDocumentParentTaskBlockParentTaskState | null>;
}

interface TaskTypeDocumentResultBlockSelectedField {
  field_id: XmlElem<string | null>;
}

interface TaskTypeDocumentResultBlock extends ResultFieldsBase {
  selected_fields: XmlMultiElem<TaskTypeDocumentResultBlockSelectedField | null>;
}

interface TaskTypeDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type TaskTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
WebVariablesBase & {
  Doc: TaskTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Код получения Url для перехода в задачу */
  eval_code_for_url: XmlElem<string | null>;
  roles: XmlMultiElem<TaskTypeDocumentRole | null>;
  custom_states: XmlMultiElem<TaskTypeDocumentCustomState | null>;
  /**
   * Можно создавать задачи
   * @default none
   */
  create_task_type_id: XmlElem<string | null, typeof common.create_task_types>;
  /**
   * Можно изменять задачи
   * @default none
   */
  edit_task_type_id: XmlElem<string | null, typeof common.edit_task_types>;
  /**
   * Можно просматривать задачи
   * @default youself
   */
  view_task_type_id: XmlElem<string | null, typeof common.view_task_types>;
  /**
   * Показывать в WorkSpace
   * @default false
   */
  show_in_workspace: XmlElem<boolean>;
  /**
   * Нельзя создавать записи учета времени меньше минуты
   * @default false
   */
  cannot_create_tt_less_minute: XmlElem<boolean>;
  /**
   * Задачи связаны с проектами
   * @default false
   */
  related_to_projects: XmlElem<boolean>;
  /**
   * Тип связанного объекта
   * @default task
   */
  related_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Настраиваемый тип задачи
   * @default false
   */
  virtual: XmlElem<boolean>;
  /** Выборка для типа задач */
  virtual_remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  /**
   * Переопределить переменные для типа задачи
   * @default false
   */
  use_custom_wvars: XmlElem<boolean>;
  /**
   * Учитывать время выполнения задачи (в интерфейсе WorkSpace)
   * @default false
   */
  consider_time_in_workspace: XmlElem<boolean>;
  /**
   * Выбор проекта обязателен
   * @default false
   */
  mandatory_project: XmlElem<boolean>;
  parent_task_block: XmlElem<TaskTypeDocumentParentTaskBlock | null>;
  /** Удаленное действие для создания и редактирования задачи */
  virtual_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Удаленное действие для документооборота */
  workflow_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /**
   * Можно изменять статус задач
   * @default false
   */
  can_change_status: XmlElem<boolean>;
  /**
   * Можно изменять поля задачи (кроме статуса)
   * @default false
   */
  can_change_task: XmlElem<boolean>;
  /**
   * Можно удалять задачи
   * @default false
   */
  can_delete_task: XmlElem<boolean>;
  /** Связанный тип разговора */
  related_conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  result_block: XmlElem<TaskTypeDocumentResultBlock | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<TaskTypeDocumentView | null>;
};

type TaskTypeDocument = XmlDocument & {
  TopElem: TaskTypeDocumentTopElem;
  task_type: TaskTypeDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
