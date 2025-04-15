type SelectedVacancyDocumentTopElem = XmlTopElem & {
  Doc: SelectedVacancyDocument;
  /** Вакансия */
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  /** Название вакансии */
  vacancy_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SelectedVacancyDocument = XmlDocument & {
  TopElem: SelectedVacancyDocumentTopElem;
  selected_vacancy: SelectedVacancyDocumentTopElem;
  DocDesc(): string;
};
