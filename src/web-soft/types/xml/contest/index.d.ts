interface ContestDocumentResponsible extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ContestDocumentJudge extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @default false */
  main: XmlElem<boolean>;
}

interface ContestDocumentParticipant {
  participant_id: XmlElem<number | null, ParticipantCatalogDocumentTopElem>;
}

type ContestDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContestDocument;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  /** @default true */
  is_open: XmlElem<boolean>;
  /** @default true */
  show_works: XmlElem<boolean>;
  /** @default plan */
  status_id: XmlElem<string | null, typeof common.contest_states>;
  /** @default false */
  show_marks: XmlElem<boolean>;
  /** @default list */
  web_template_id: XmlElem<string | null, typeof common.contest_web_templates>;
  /** @default voting */
  estimation_id: XmlElem<string | null, typeof common.contest_types>;
  /** @default false */
  online_vote: XmlElem<boolean>;
  /** @default false */
  show_rating: XmlElem<boolean>;
  /** @default true */
  show_results: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  responsibles: XmlMultiElem<ContestDocumentResponsible | null>;
  judges: XmlMultiElem<ContestDocumentJudge | null>;
  participants: XmlMultiElem<ContestDocumentParticipant | null>;
  /** @default 1 */
  mark_min: XmlElem<number>;
  /** @default 5 */
  mark_max: XmlElem<number>;
  /** @default true */
  combo: XmlElem<boolean>;
  /** @default 5 */
  file_num: XmlElem<number>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  add_participant(personId: number, participantTopElem: XmlTopElem): undefined | void;
  calculate_rating(): void;
};

type ContestDocument = XmlDocument & {
  TopElem: ContestDocumentTopElem;
  contest: ContestDocumentTopElem;
  DocDesc(): string;
};
