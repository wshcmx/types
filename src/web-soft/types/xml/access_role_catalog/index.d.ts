type AccessRoleCatalogDocumentTopElem = XmlTopElem &
AccessRoleBase & {
  /** Только чтение */
  read_only: XmlElem<boolean | null>;
};
