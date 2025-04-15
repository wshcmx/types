type ConnectionDocumentTopElem = XmlTopElem & {
  Doc: ConnectionDocument;
  id: XmlElem<number | null>;
  course_id: XmlElem<number | null>;
  part_code: XmlElem<string | null>;
  user_id: XmlElem<number | null>;
  user_code: XmlElem<string | null>;
  user_fullname: XmlElem<string | null>;
  active_learning_id: XmlElem<number | null>;
  learning_xml: XmlElem<string | null>;
  state: XmlElem<string | null>;
  creation_date: XmlElem<Date | null>;
  delete_date: XmlElem<Date | null>;
  terminate_date: XmlElem<Date | null>;
  /** @default false */
  unauthorized: XmlElem<boolean>;
  host_path: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_info(): null | Object;
};

type ConnectionDocument = XmlDocument & {
  TopElem: ConnectionDocumentTopElem;
  connection: ConnectionDocumentTopElem;
  OnBeforeSave(): void;
};
