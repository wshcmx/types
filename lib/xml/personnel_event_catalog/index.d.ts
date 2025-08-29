type PersonnelEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус события
   * @default plan
   */
  event_status: XmlElem<string>;
  /** Тип кадрового события */
  personnel_event_type_id: XmlElem<number | null, PersonnelEventTypeCatalogDocumentTopElem>;
  /** Дата создания события */
  creation_date: XmlElem<Date | null>;
  /** Дата обработки события */
  date_processed: XmlElem<Date | null>;
  /** Дата отмены */
  date_cancel: XmlElem<Date | null>;
  /** Дата удаления */
  date_delete: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
