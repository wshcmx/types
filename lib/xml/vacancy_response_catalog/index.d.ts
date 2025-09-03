type VacancyResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Рекрутер */
  recruiter_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО рекрутера */
  recruiter_person_fullname: XmlElem<string | null>;
  /** Автор отклика */
  response_author_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО автора отклика */
  response_author_fullname: XmlElem<string | null>;
  /** Резюме */
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  /** Адаптация */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /** Дата отклика */
  date: XmlElem<Date | null>;
  /** Дата приглашения */
  date_invitation: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
