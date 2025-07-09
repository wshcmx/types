type EventPhaseCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.event_types>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /**
   * Является публичным
   * @default false
   */
  is_public: XmlElem<boolean>;
  /**
   * Является открытым
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /** Имя преподавателя */
  person_fullname: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Ресурс */
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
