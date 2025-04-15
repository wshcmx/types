interface SpxmlApplicationDocumentModule {
  name: XmlElem<string | null>;
  exist_req_expr: XmlElem<string | null>;
}

interface SpxmlApplicationDocumentDatabase {
  name: XmlElem<string | null>;
  instance: XmlElem<string>;
  trash_db: XmlElem<string>;
  storage_type: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
}

type SpxmlApplicationDocumentTopElem = XmlTopElem & {
  Doc: SpxmlApplicationDocument;
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  version: XmlElem<string | null>;
  build_date: XmlElem<Date | null>;
  copyright: XmlElem<string | null>;
  web_site: XmlElem<string | null>;
  modules: XmlMultiElem<SpxmlApplicationDocumentModule | null>;
  databases: XmlMultiElem<SpxmlApplicationDocumentDatabase | null>;
  default_db: XmlElem<string | null>;
  server_start_url: XmlElem<string | null>;
  start_url: XmlElem<string | null>;
  web_dir: XmlElem<string | null>;
};

type SpxmlApplicationDocument = XmlDocument & {
  TopElem: SpxmlApplicationDocumentTopElem;
  spxml_application: SpxmlApplicationDocumentTopElem;
};
