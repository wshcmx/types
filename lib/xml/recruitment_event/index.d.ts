type RecruitmentEventDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
AdminAccessBase & {
  Doc: RecruitmentEventDocument;
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
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Система подбора персонала */
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecruitmentEventDocument = XmlDocument & {
  TopElem: RecruitmentEventDocumentTopElem;
  recruitment_event: RecruitmentEventDocumentTopElem;
  DocDesc(): string;
  OnInit(): void;
};
