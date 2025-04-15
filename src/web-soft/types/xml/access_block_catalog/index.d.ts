type AccessBlockCatalogDocumentTopElem = XmlTopElem &
AccessBlockBase & {
  is_std: XmlElem<boolean>;
  is_license: XmlElem<boolean>;
};
