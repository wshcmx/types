type PersonHierarchyCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  parent_sub_id: XmlElem<number | null>;
  subdivision_id: XmlMultiElemObject<number | null>;
  /** @default false */
  ready: XmlElem<boolean>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
