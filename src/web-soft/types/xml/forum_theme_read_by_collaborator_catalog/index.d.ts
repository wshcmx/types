type ForumThemeReadByCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  forum_theme_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
