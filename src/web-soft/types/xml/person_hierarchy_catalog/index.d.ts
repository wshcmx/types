type PersonHierarchyCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  parent_sub_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_id: XmlMultiElemObject<number | null, SubdivisionCatalogDocumentTopElem>;
  ready: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
