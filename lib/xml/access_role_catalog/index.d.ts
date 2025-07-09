type AccessRoleCatalogDocumentTopElem = XmlTopElem &
AccessRoleBase & {
  /**
   * Только чтение
   * @default false
   */
  read_only: XmlElem<boolean | null>;
};
