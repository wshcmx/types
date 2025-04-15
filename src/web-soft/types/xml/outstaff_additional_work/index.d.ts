type OutstaffAdditionalWorkDocumentTopElem = XmlTopElem & {
  Doc: OutstaffAdditionalWorkDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffAdditionalWorkDocument = XmlDocument & {
  TopElem: OutstaffAdditionalWorkDocumentTopElem;
  outstaff_additional_work: OutstaffAdditionalWorkDocumentTopElem;
};
