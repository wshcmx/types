type AssessmentCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название теста */
  title: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Статус
   * @default publish
   */
  status: XmlElem<string, typeof common.course_test_states>;
  /** Продолжительность в минутах */
  duration: XmlElem<number | null>;
  /** Продолжительность в днях */
  duration_days: XmlElem<number | null>;
  /** Проходной балл */
  passing_score: XmlElem<number | null>;
  /**
   * Не показывать набранный балл для незавершенных тестов
   * @default false
   */
  not_display_unfinished_score: XmlElem<boolean>;
  /**
   * Открытый тест (возможно самостоятельно назначить тест)
   * @default false
   */
  is_open: XmlElem<boolean>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  /** Тип внешнего источника */
  external_type: XmlElem<string | null, typeof common.assessment_external_types>;
  publish_url: XmlElem<string | null>;
  /** @default 750 */
  win_width: XmlElem<string>;
  /** @default 530 */
  win_height: XmlElem<string>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Тэги */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Система тестирования */
  testing_system_id: XmlElem<number | null, TestingSystemCatalogDocumentTopElem>;
  OnBuild(): void;
};
