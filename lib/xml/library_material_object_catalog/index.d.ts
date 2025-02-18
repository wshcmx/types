type LibraryMaterialObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  library_material_name: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_catalog: XmlElem<string | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
