type SxReplicaObjectCatalogDocumentTopElem = XmlTopElem & {
  url: XmlElem<string | null>;
  last_mod_date: XmlElem<Date | null>;
  object_type_order_index: XmlElem<number | null>;
};
