type CareerTreeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Текущая должность */
  current_position_name: XmlElem<string | null>;
  /** Цель */
  position_name: XmlElem<string | null>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность занимает */
  position_collaborator_fullname: XmlElem<string | null>;
  OnBuildExt(): void;
  MatchDocTypeExt(): void;
  OnDeleteExt(): void;
};
