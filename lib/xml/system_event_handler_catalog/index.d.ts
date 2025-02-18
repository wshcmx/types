type SystemEventHandlerCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /**
   * Включен
   * @default false
   */
  is_enabled: XmlElem<boolean>;
  /** Тип программного кода */
  code_type: XmlElem<string | null>;
  /** Системное событие */
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
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
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
