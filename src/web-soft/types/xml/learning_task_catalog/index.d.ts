type LearningTaskCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Разрешить самостоятельное назначение
   * @default true
   */
  yourself_start: XmlElem<boolean>;
  /**
   * Использовать в мероприятиях
   * @default false
   */
  use_in_event: XmlElem<boolean>;
  /** Продолжительность выполнения */
  duration: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Эксперт курса */
  experts_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  OnBuild(): void;
};
