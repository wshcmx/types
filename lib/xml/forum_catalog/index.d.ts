type ForumCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Разрешена подписка
   * @default false
   */
  permit_subscription: XmlElem<boolean>;
  /**
   * Закрытый форум
   * @default false
   */
  closed: XmlElem<boolean>;
  /**
   * Возможность отправки анонимных сообщений
   * @default false
   */
  allow_anonymous_message: XmlElem<boolean>;
  /**
   * Разрешить создавать закрытие темы
   * @default false
   */
  allow_create_closed_theme: XmlElem<boolean>;
  /**
   * Разрешить пользователям удалять свои сообщения
   * @default false
   */
  allow_user_delete: XmlElem<boolean>;
  /**
   * Показывать статусы пользователей
   * @default false
   */
  disp_user_status: XmlElem<boolean>;
  /** Каждому сообщению требуется подтверждение модератора */
  need_moder_approval: XmlElem<boolean>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
