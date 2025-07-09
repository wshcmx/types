type BossTypeOperationCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
  /** Операции */
  operations: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
