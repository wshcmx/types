type SelectedResumeDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SelectedResumeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Резюме */
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type SelectedResumeDocument = XmlDocument & {
  TopElem: SelectedResumeDocumentTopElem;
  selected_resume: SelectedResumeDocumentTopElem;
  DocDesc(): string;
};
