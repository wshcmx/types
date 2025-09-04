type StaffSubCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  parent_id: XmlElem<number | null>;
  basic_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  basic_collaborator_fullname: XmlElem<string | null>;
  is_boss: XmlElem<boolean | null>;
  /** @default false */
  is_disbanded: XmlElem<boolean | null>;
  OnBuild(): void;
  MatchDocType(): boolean;
};
