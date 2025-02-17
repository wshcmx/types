type LearningRecordCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default test_learning
   */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /**
   * Тип объекта
   * @default assessment
   */
  proctoring_object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  proctoring_object_id: XmlElem<number | null>;
  /** Название объекта */
  proctoring_object_name: XmlElem<string | null>;
  /** Система прокторинга */
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО пользователя */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Должность */
  person_subdivision_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Запись закончена
   * @default false
   */
  is_finish_record: XmlElem<boolean>;
  /** Количество фото не прошедших проверку */
  num_failed_checked_foto: XmlElem<number | null>;
  /**
   * Статус проверки фото
   * @default active
   */
  check_foto_state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  /**
   * Скачаны материалы прокторинга
   * @default false
   */
  download_materials: XmlElem<boolean>;
  active_session_id: XmlElem<string | null>;
  /** Дата завершения */
  active_session_finish_date: XmlElem<Date | null>;
  /** Прокторы */
  proctors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Все прокторы */
  archive_proctors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Предпочтительный проктор
   * @default false
   */
  is_prefer_proctor: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
