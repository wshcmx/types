type VacancyResponseDocumentTopElem = XmlTopElem &
MsPersonSdBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: VacancyResponseDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Рекрутер */
  recruiter_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /** Комментарий рекрутера */
  comment_recruiter: XmlElem<string | null>;
  /** Автор отклика */
  response_author_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /** Резюме */
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  /** Дата отклика */
  date: XmlElem<Date | null>;
  /** Дата приглашения */
  date_invitation: XmlElem<Date | null>;
  /** Сопроводительное письмо */
  desc: XmlElem<string | null>;
  /**
   * Статус
   * @default not_considered
   */
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  /** Ответ работодателя */
  employer_answer: XmlElem<string | null>;
  /** Адаптация */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  set_status(newStatus: string, sendNotifications: boolean): void;
};

type VacancyResponseDocument = XmlDocument & {
  TopElem: VacancyResponseDocumentTopElem;
  vacancy_response: VacancyResponseDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
