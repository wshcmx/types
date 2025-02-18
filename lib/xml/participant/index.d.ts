interface ParticipantDocumentMark extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
}

type ParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase & {
  Doc: ParticipantDocument;
  /** Конкурс */
  contest_id: XmlElem<number | null, ContestCatalogDocumentTopElem>;
  /** Название конкурса */
  contest_name: XmlElem<string | null>;
  work_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.participant_states>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Общая оценка комиссии */
  general_mark: XmlElem<string | null>;
  /** Оценки */
  marks: XmlMultiElem<ParticipantDocumentMark | null>;
  /** Рейтинг */
  rating: XmlElem<number | null>;
  /** Занятое место */
  place: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ParticipantDocument = XmlDocument & {
  TopElem: ParticipantDocumentTopElem;
  participant: ParticipantDocumentTopElem;
  DocDesc(): string;
};
