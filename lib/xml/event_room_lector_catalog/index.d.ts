type EventRoomLectorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Мероприятия */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** @default false */
  is_model: XmlElem<boolean>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /**
   * Тип
   * @default invitee
   */
  type: XmlElem<string, typeof common.lector_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО преподавателя */
  person_fullname: XmlElem<string | null>;
  /** ФИО преподавателя */
  lector_fullname: XmlElem<string | null>;
  /** Кол-во часов */
  hours: XmlElem<number | null>;
  /**
   * Является преподавателем
   * @default false
   */
  is_tutor: XmlElem<boolean | null>;
  /**
   * Является сотрудником
   * @default false
   */
  is_collaborator: XmlElem<boolean | null>;
  /**
   * Является ответственным за подготовку
   * @default false
   */
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
