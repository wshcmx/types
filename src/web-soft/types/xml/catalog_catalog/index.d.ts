interface CatalogsDocumentCatalog {
  name: XmlElem<string | null, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number | null>;
}

interface CatalogsDocumentAccessBlockType {
  id: XmlElem<string | null, typeof common.access_block_types>;
}

type CatalogCatalogDocumentTopElem = XmlTopElem & {
  catalogs: XmlMultiElem<CatalogsDocumentCatalog | null>;
  access_block_types: XmlMultiElem<CatalogsDocumentAccessBlockType | null>;
};
