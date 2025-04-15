type TenancyCatalogDocumentTopElem = XmlTopElem & { Doc: TenancyCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  creator_id: XmlElem<string>;
  creator_fullname: XmlElem<string>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
};

type TenancyCatalogDocument = XmlDocument & {
  TopElem: TenancyCatalogDocumentTopElem;
};
