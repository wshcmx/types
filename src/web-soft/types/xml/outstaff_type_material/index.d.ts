type OutstaffTypeMaterialDocumentTopElem = XmlTopElem & {
  Doc: OutstaffTypeMaterialDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffTypeMaterialDocument = XmlDocument & {
  TopElem: OutstaffTypeMaterialDocumentTopElem;
  outstaff_type_material: OutstaffTypeMaterialDocumentTopElem;
};
