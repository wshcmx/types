type PersonActivityInfoCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  chat_last_activity_date: XmlElem<Date | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  update_date: XmlElem<Date | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
