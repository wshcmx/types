type WorkFormDocumentTopElem = XmlTopElem & {
  Doc: WorkFormDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkFormDocument = XmlDocument & {
  TopElem: WorkFormDocumentTopElem;
  work_form: WorkFormDocumentTopElem;
};
