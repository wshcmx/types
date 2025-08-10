type SxWebSiteCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  root_dir: XmlElem<string | null>;
  /** @default 80 */
  port: XmlElem<number | null>;
};
