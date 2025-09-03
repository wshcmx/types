type SxDbDocCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  mod_date: XmlElem<Date | null>;
  OnBuild(): void;
  MatchDocType(): boolean;
};
