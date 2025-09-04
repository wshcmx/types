type RecommendationCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  /** Телефон */
  phone: XmlElem<string | null>;
  /** E-mail */
  email: XmlElem<string | null>;
  /** Рабочий телефон */
  work_phone: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  /** ID вакансии */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Сотрудник, отправивший рекомендацию */
  src_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  src_person_fullname: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
