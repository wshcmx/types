type ViewTypeCatalogDocumentTopElem = XmlTopElem &
ViewBase & {
  catalog: XmlElem<string | null>;
};
