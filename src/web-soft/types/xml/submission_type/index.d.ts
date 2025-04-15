interface SubmissionTypeDocumentRecipient extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentSender extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentPhase {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
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
  collect_state: XmlElem<string, typeof common.collect_states>;
}

interface SubmissionTypeDocumentView extends DescBase {
  /**
   * @temp
   * @default 0
   */
  flag_delete_doc: XmlElem<number>;
}

type SubmissionTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SubmissionTypeDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Периодичность
   * @default month
   */
  periodity_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Срок формирования этапов
   * @default 2
   */
  period_form: XmlElem<number | null>;
  /** Получатели */
  recipients: XmlMultiElem<SubmissionTypeDocumentRecipient | null>;
  /** Отчитывающиеся */
  senders: XmlMultiElem<SubmissionTypeDocumentSender | null>;
  /** Этапы */
  phases: XmlMultiElem<SubmissionTypeDocumentPhase | null>;
  /**
   * Требует подтверждения
   * @default false
   */
  confirm_req: XmlElem<boolean>;
  /**
   * Использовать форму для отображения на портале
   * @default true
   */
  use_form: XmlElem<boolean>;
  /** Программный код заполнения данных */
  eval_prev_form: XmlElem<string | null>;
  /** Программный код обработки данных */
  eval_post_form: XmlElem<string | null>;
  /** Файл */
  form_file: XmlElem<InsertFileBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<SubmissionTypeDocumentView | null>;
};

type SubmissionTypeDocument = XmlDocument & {
  TopElem: SubmissionTypeDocumentTopElem;
  submission_type: SubmissionTypeDocumentTopElem;
  DocDesc(): string;
};
