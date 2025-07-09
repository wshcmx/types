type LibraryPlayerCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Хранилище учебных записей */
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  /** Учебная активность */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  /** CMI5 */
  cmi5: XmlElem<boolean | null>;
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
