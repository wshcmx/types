type ForumEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /**
   * Закрытый форум
   * @default false
   */
  closed: XmlElem<boolean>;
  /**
   * Закрепить тему
   * @default false
   */
  pinned: XmlElem<boolean | null>;
  /**
   * Способ отображения
   * @default realname
   */
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  /** Информация об авторе */
  author_info: XmlElem<string | null>;
  /** Сотрудник */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Родительская статья форума */
  parent_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  /** Корневая статья формума */
  main_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  /**
   * Одобрена модератором
   * @default false
   */
  is_moder_approved: XmlElem<boolean>;
  /** Предыдущая дата создания */
  last_create_date: XmlElem<Date | null>;
  /** Количество дочерних */
  child_num: XmlElem<number | null>;
  /** Удаленный IP */
  remote_ip: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
