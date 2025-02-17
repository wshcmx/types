type DnRegisterCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  control_event_id: XmlElem<number | null, DnControlEventCatalogDocumentTopElem>;
  /**
   * Тип
   * @default ordinary
   */
  type_id: XmlElem<string, typeof common.registr_types>;
  /** Факультет */
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date | null>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
