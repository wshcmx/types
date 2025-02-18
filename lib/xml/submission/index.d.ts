interface SubmissionDocumentView extends DescBase {
  /** @temp */
  submission_type_doc: XmlElem<unknown | null>;
  fill_submission_type_doc(): unknown;
}

type SubmissionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: SubmissionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип отчетной формы */
  submission_type_id: XmlElem<number | null, SubmissionTypeCatalogDocumentTopElem>;
  /** Название отчетной формы */
  submission_type_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала периода */
  period_date_start: XmlElem<Date | null>;
  /** Дата окончания периода */
  period_date_finish: XmlElem<Date | null>;
  /** Дата начала заполнения */
  date_start: XmlElem<Date | null>;
  /** Дата окончания заполнения */
  date_finish: XmlElem<Date | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string, typeof common.submission_states>;
  decline_desc: XmlElem<string | null>;
  /** Этап */
  phase_name: XmlElem<string | null>;
  /** Этап */
  phase_id: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<SubmissionDocumentView | null>;
};

type SubmissionDocument = XmlDocument & {
  TopElem: SubmissionDocumentTopElem;
  submission: SubmissionDocumentTopElem;
  DocDesc(): string;
};
