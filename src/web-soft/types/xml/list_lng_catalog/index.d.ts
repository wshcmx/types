type ListLngCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  short_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  lng_file_url: XmlElem<string | null>;
  common_url: XmlElem<string | null>;
  startup_page_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
};
