type StatementCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Миллисекунды создания */
  create_ticks: XmlElem<number | null>;
  timestamp: XmlElem<Date | null>;
  /** Учебная активность */
  statement_ref_id: XmlElem<string | null>;
  /**
   * Аннулировано
   * @default false
   */
  voided: XmlElem<boolean>;
  /** Обработано */
  processed: XmlElem<boolean | null>;
  /** Хранилище учебных записей */
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default activity
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Тип учебной активности */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  /** Тип учебной активности */
  activity_code: XmlElem<string | null>;
  /** Статус */
  verb_id: XmlElem<string | null>;
  /** Статус */
  verb_name: XmlElem<string | null>;
  /** Текст Агента */
  agent_json_str: XmlElem<string | null>;
  /** Строка регистрации */
  registration: XmlElem<string | null>;
  /** ID регистрации */
  context_registration: XmlElem<string | null>;
  /** Инструктор */
  context_instructor: XmlElem<string | null>;
  /** Команда */
  context_team: XmlElem<string | null>;
  /** Редакция */
  context_revision: XmlElem<string | null>;
  /** Платформа */
  context_platform: XmlElem<string | null>;
  /** Код языка */
  context_language: XmlElem<string | null>;
  /** Запись */
  context_statement: XmlElem<string | null>;
  /** Максимальный балл */
  result_score_max: XmlElem<number | null>;
  /** Минимальный балл */
  result_score_min: XmlElem<number | null>;
  /** Необработанный балл */
  result_score_raw: XmlElem<number | null>;
  /** Обработанный балл */
  result_score_scaled: XmlElem<number | null>;
  /** Пройдено */
  result_success: XmlElem<boolean | null>;
  /** Завершено */
  result_completion: XmlElem<boolean | null>;
  /** Ответ */
  result_response: XmlElem<string | null>;
  /** Продолжительность */
  result_duration: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
