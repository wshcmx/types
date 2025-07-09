type EventGroupCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Мероприятия */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
