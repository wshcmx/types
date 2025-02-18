interface ForumDocumentModerator extends PersonFillingBase {
  moderator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ForumDocumentView extends DescBase {
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
}

type ForumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: ForumDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /**
   * Возможна подписка
   * @default false
   */
  permit_subscription: XmlElem<boolean>;
  /**
   * Форум закрыт
   * @default false
   */
  closed: XmlElem<boolean>;
  /**
   * Разрешить оставлять анонимные сообщения
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
   * Разрешить пользователям закреплять темы
   * @default true
   */
  allow_create_pinned_theme: XmlElem<boolean>;
  /**
   * Разрешить Rich-text редактирование
   * @default false
   */
  allow_rich_text_edit: XmlElem<boolean>;
  /**
   * Разрешить пользователям редактировать свои сообщения/темы
   * @default true
   */
  allow_edit: XmlElem<boolean>;
  /**
   * Отображать статусы пользователей
   * @default false
   */
  disp_user_status: XmlElem<boolean>;
  /**
   * Использовать в качестве аватара фотографию пользователя
   * @default true
   */
  disp_user_avatar: XmlElem<boolean>;
  /**
   * Отображать аватар
   * @default false
   */
  disp_foto: XmlElem<boolean>;
  /**
   * Каждому сообщению требуется подтверждение модератора
   * @default false
   */
  need_moder_approval: XmlElem<boolean>;
  /** @default false */
  can_attach_file: XmlElem<boolean>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Название */
  access: XmlElem<AccessDocBase | null>;
  /** Модераторы */
  moderators: XmlMultiElem<ForumDocumentModerator | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ForumDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ForumDocument = XmlDocument & {
  TopElem: ForumDocumentTopElem;
  forum: ForumDocumentTopElem;
  DocDesc(): string;
};
