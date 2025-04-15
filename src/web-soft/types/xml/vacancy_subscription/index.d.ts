interface VacancySubscriptionDocumentSuitableVacancy {
  id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название теста */
  name: XmlElem<string | null>;
  /** Код теста */
  code: XmlElem<string | null>;
}

type VacancySubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
ViewConditionsBase &
AdminAccessBase & {
  Doc: VacancySubscriptionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Активная
   * @default true
   */
  is_active: XmlElem<boolean | null>;
  /** Ключевые слова в тексте вакансии */
  full_text_search_str: XmlElem<string | null>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  suitable_vacancys: XmlMultiElem<VacancySubscriptionDocumentSuitableVacancy | null>;
  /** Дата последней отправки вакансий */
  send_vacancy_date: XmlElem<Date | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  refresh_suitable_vacancys(): VacancyCatalogDocumentTopElem;
};

type VacancySubscriptionDocument = XmlDocument & {
  TopElem: VacancySubscriptionDocumentTopElem;
  vacancy_subscription: VacancySubscriptionDocumentTopElem;
  DocDesc(): string;
};
