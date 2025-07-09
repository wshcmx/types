type TaskTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
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
  /** Тип связанного объекта */
  related_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Настраиваемый тип задачи
   * @default false
   */
  virtual: XmlElem<boolean>;
  /** Выборка для типа задач */
  virtual_remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  /** Удаленное действие для создания и редактирования задачи */
  virtual_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Удаленное действие для документооборота */
  workflow_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /**
   * Разрешено изменение статуса
   * @default false
   */
  can_change_status: XmlElem<boolean>;
  /**
   * Разрешено изменение задачи
   * @default false
   */
  can_change_task: XmlElem<boolean>;
  /**
   * Разрешено удаление задачи
   * @default false
   */
  can_delete_task: XmlElem<boolean>;
  /** Связанный тип разговора */
  related_conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  /**
   * Использовать кастомные переменные
   * @default false
   */
  use_custom_wvars: XmlElem<boolean>;
  /**
   * Учитывать время выполнения задачи (в интерфейсе WorkSpace)
   * @default false
   */
  consider_time_in_workspace: XmlElem<boolean>;
  /**
   * Способ отображения по умолчанию
   * @default tasklist
   */
  default_display_mode: XmlElem<string | null>;
  /**
   * Разрешать переключение способа отображения
   * @default false
   */
  can_change_view: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
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
  OnBuild(): void;
};
