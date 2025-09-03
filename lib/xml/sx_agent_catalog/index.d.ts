interface SxAgentsDocumentEntry {
  time: XmlMultiElemObject<Date | null>;
}

interface SxAgentsSchedule {
  launch_on_start: XmlElem<boolean>;
}

type SxAgentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string | null>;
  code_url: XmlElem<string | null>;
  entry_point: XmlElem<string | null>;
  time_limit: XmlElem<number | null>;
  /** @default 1 */
  max_instances: XmlElem<number>;
  entries: XmlMultiElem<SxAgentsDocumentEntry | null>;
  schedule: XmlElem<SxAgentsSchedule | null>;
};
