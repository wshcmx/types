interface SxApplicationsSxApplicationsItemServerData {
  port: XmlElem<number | null>;
  web_port: XmlElem<number | null>;
  ip_address: XmlElem<string | null>;
  host_name: XmlMultiElemObject<string | null>;
  web_dir: XmlElem<string | null>;
}

interface SxApplicationsItem {
  name: XmlElem<string | null>;
  spec: XmlElem<string | null>;
  data_dir: XmlElem<string | null>;
  server_data: XmlElem<SxApplicationsSxApplicationsItemServerData | null>;
}

type SxApplicationCatalogDocumentTopElem = XmlTopElem & {
  server_data: XmlElem<SxApplicationsSxApplicationsItemServerData | null>;
  item: XmlMultiElemObject<SxApplicationsItem | null>;
};
