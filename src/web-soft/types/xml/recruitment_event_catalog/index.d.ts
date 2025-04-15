type RecruitmentEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Кандидат */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО */
  person_fullname: XmlElem<string | null>;
  /** Дата и время начала */
  start_date: XmlElem<Date | null>;
  /** Дата и время окончания */
  finish_date: XmlElem<Date | null>;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Тип события */
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  /** Статус */
  estaff_event_type_status_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  /** Система подбора персонала */
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
