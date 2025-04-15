interface BlockObjectsBaseObject {
  id: XmlElem<number | null>;
  obj_title: XmlElem<string | null>;
  category: XmlElem<string | null>;
  custom_flag: XmlElem<boolean | null>;
}

interface BlockObjectsBase {
  objects: XmlMultiElem<BlockObjectsBaseObject | null>;
}

type DispObjectBlockCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  request_type: XmlElem<BlockObjectsBase | null>;
  response_type: XmlElem<BlockObjectsBase | null>;
  object_data_type: XmlElem<BlockObjectsBase | null>;
  doc_type: XmlElem<BlockObjectsBase | null>;
  custom_report: XmlElem<BlockObjectsBase | null>;
};
