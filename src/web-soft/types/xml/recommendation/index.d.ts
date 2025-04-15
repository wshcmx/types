type RecommendationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecommendationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Фамилия */
  lastname: XmlElem<string | null>;
  /** Имя */
  firstname: XmlElem<string | null>;
  /** Отчество */
  middlename: XmlElem<string | null>;
  fullname(): string;
  /** Телефон */
  phone: XmlElem<string | null>;
  email: XmlElem<string | null>;
  /** Рабочий телефон */
  work_phone: XmlElem<string | null>;
  /** Мобильный телефон */
  mobile_phone: XmlElem<string | null>;
  /**
   * Статус
   * @default not_considered
   */
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  /** HTML-описание резюме */
  desc: XmlElem<string | null>;
  /** ID вакансии */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Сотрудник, отправивший рекомендацию */
  src_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  src_person_fullname: XmlElem<string | null>;
  /** Рекомендательное письмо */
  letter_text: XmlElem<string | null>;
  /** Комментарий рекрутера */
  comment_recruiter: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  set_status(newStatus: string, sendNotifications: boolean): void;
};

type RecommendationDocument = XmlDocument & {
  TopElem: RecommendationDocumentTopElem;
  recommendation: RecommendationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
