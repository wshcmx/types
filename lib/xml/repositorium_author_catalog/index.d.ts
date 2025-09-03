type RepositoriumAuthorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  repositorium_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  repositorium_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
