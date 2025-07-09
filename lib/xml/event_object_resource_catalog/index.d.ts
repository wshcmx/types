type EventObjectResourceCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Мероприятия */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.event_types>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Ресурс */
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  /** Название ресурса */
  object_resource_name: XmlElem<string | null>;
  /** Тип ресурса */
  object_resource_type: XmlElem<string | null, typeof lists.object_resource_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
