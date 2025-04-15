type AdminAccessCatalogCatalogDocumentTopElem = XmlTopElem &
AdminAccessCatalogBase & {
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  social: XmlElem<SocialObjectAccessBase | null>;
};
