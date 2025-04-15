type SystemEventHandlerDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: SystemEventHandlerDocument;
  /**
   * Включен
   * @default false
   */
  is_enabled: XmlElem<boolean>;
  /** Системное событие */
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  /** @temp */
  view: XmlElem<unknown | null>;
  /** Системное событие */
  last_system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /**
   * Включен
   * @default false
   */
  last_is_enabled: XmlElem<boolean>;
};

type SystemEventHandlerDocument = XmlDocument & {
  TopElem: SystemEventHandlerDocumentTopElem;
  system_event_handler: SystemEventHandlerDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
