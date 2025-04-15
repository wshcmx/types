interface TenancyDocumentLimit {
  id: XmlElem<number>;
  type: XmlElem<string>;
  limit: XmlElem<number>;
  object_type: XmlElem<string>;
  comment: XmlElem<string>;
}

interface TenancyDocumentHost {
  id: XmlElem<number>;
  name: XmlElem<string>;
}

type TenancyDocumentTopElem = XmlTopElem & { Doc: TenancyDocument } &
FileListBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  creator_fullname: XmlElem<string>;
  creator_id: XmlElem<string>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  manager_id: XmlElem<number>;
  limits: XmlMultiElem<TenancyDocumentLimit>;
  hosts: XmlMultiElem<TenancyDocumentHost>;
  storage_exists: XmlElem<boolean>;
  storage_login: XmlElem<string>;
  storage_key: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TenancyDocument = XmlDocument & {
  TopElem: TenancyDocumentTopElem;
};
