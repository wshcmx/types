type PersonActivityInfoCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  chat_last_activity_date: XmlElem<Date>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  update_date: XmlElem<Date>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
