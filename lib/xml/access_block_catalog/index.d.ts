type AccessBlockCatalogDocumentTopElem = XmlTopElem &
AccessBlockBase & {
  /** @default false */
  is_std: XmlElem<boolean>;
  /** @default true */
  is_license: XmlElem<boolean>;
};
