type WorkspaceConfigCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /**
   * WorkSpace активен
   * @default false
   */
  is_enabled: XmlElem<boolean>;
  /** Файл с надписями */
  labels_file_url: XmlElem<string | null>;
  /** Тема по умолчанию */
  default_theme_id: XmlElem<string | null, typeof common.workspace_themes>;
  /**
   * Показывать раздел Разговоры
   * @default false
   */
  show_conversation: XmlElem<boolean>;
  /**
   * Показывать раздел Календарь
   * @default false
   */
  show_calendar: XmlElem<boolean>;
  /**
   * Показывать раздел Задачи
   * @default false
   */
  show_task: XmlElem<boolean>;
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
