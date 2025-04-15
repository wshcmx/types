type UserDataDocumentTopElem = XmlTopElem & {
  Doc: UserDataDocument;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  creation_date(): Date;
  delete_date: XmlElem<Date | null>;
  data: XmlElem<string | null>;
  /** Об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type UserDataDocument = XmlDocument & {
  TopElem: UserDataDocumentTopElem;
  user_data: UserDataDocumentTopElem;
  DocDesc(): string;
};
