type VacancySubscriptionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /**
   * Активная
   * @default true
   */
  is_active: XmlElem<boolean | null>;
  /** Ключевые слова в тексте вакансии */
  full_text_search_str: XmlElem<string | null>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Дата последней отправки вакансий */
  send_vacancy_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
