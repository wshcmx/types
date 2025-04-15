type CatalogListBaseDocumentTopElem = XmlTopElem &
CatalogListBase & {
  Doc: CatalogListBaseDocument;
};

type CatalogListBaseDocument = XmlDocument & {
  TopElem: CatalogListBaseDocumentTopElem;
  catalog_list_base: CatalogListBaseDocumentTopElem;
};
