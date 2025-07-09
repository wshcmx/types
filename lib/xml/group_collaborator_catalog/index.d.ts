type GroupCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  tutor_fullname: XmlElem<string | null>;
  /**
   * Признак динамической группы
   * @default false
   */
  is_dynamic: XmlElem<boolean>;
  /**
   * Скрытая группа
   * @default false
   */
  is_hidden: XmlElem<boolean>;
  /**
   * Возможно оставлять сообщения на ленту
   * @default false
   */
  allow_social_post: XmlElem<boolean>;
  /** Сотрудник */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  collaborator_fullname: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
