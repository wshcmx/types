type AssessmentAppraiseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  /**
   * Является эталонной
   * @default false
   */
  is_model: XmlElem<boolean>;
  /**
   * Просмотр результатов
   * @default true
   */
  web_display: XmlElem<boolean>;
  /**
   * Объект хранения статуса
   * @default true
   */
  flag_use_plan: XmlElem<boolean>;
  /** Игнорировать присутствие */
  ignore_presence: XmlElem<boolean | null>;
  /** Публикация результатов */
  external_display_options: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  end_date: XmlElem<Date | null>;
  /** Ответственный */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /**
   * Оцениваемые
   * @default false
   */
  is_visible_auditorys: XmlElem<boolean>;
  /** @default false */
  is_visible_evaluatings: XmlElem<boolean>;
  /**
   * Эксперты
   * @default false
   */
  is_visible_experts: XmlElem<boolean>;
  /**
   * Способ отображения
   * @default 1
   */
  player: XmlElem<number>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
