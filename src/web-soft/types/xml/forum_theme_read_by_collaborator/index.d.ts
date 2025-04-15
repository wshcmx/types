type ForumThemeReadByCollaboratorDocumentTopElem = XmlTopElem & {
  Doc: ForumThemeReadByCollaboratorDocument;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  forum_theme_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ForumThemeReadByCollaboratorDocument = XmlDocument & {
  TopElem: ForumThemeReadByCollaboratorDocumentTopElem;
  forum_theme_read_by_collaborator: ForumThemeReadByCollaboratorDocumentTopElem;
  DocDesc(): string;
};
