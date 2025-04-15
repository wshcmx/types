type EventRoomLectorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number | null>;
  /** Мероприятия */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  is_model: XmlElem<boolean>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /** Тип */
  type: XmlElem<string, typeof common.lector_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО преподавателя */
  person_fullname: XmlElem<string | null>;
  /** ФИО преподавателя */
  lector_fullname: XmlElem<string | null>;
  /** Кол-во часов */
  hours: XmlElem<number | null>;
  /** Является преподавателем */
  is_tutor: XmlElem<boolean | null>;
  /** Является сотрудником */
  is_collaborator: XmlElem<boolean | null>;
  /** Является ответственным за подготовку */
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
