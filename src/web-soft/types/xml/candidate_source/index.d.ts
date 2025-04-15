type CandidateSourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: CandidateSourceDocument;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type CandidateSourceDocument = XmlDocument & {
  TopElem: CandidateSourceDocumentTopElem;
  candidate_source: CandidateSourceDocumentTopElem;
  DocDesc(): string;
};
