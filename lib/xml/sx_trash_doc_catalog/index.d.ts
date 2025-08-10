type SxTrashDocCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  del_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  OnBuild(): void;
  MatchDocType(): boolean;
};
