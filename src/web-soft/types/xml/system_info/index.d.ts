interface SystemInfoDocumentSystemInfoSystem {
  os_version: XmlElem<string | null>;
  os_bit: XmlElem<string | null>;
  process_bit: XmlElem<string | null>;
  total_memory: XmlElem<string | null>;
  available_memory: XmlElem<string | null>;
  cpu_count: XmlElem<string | null>;
  cpu_usage: XmlElem<string | null>;
}

interface SystemInfoDocumentSystemInfoProcess {
  name: XmlElem<string | null>;
  cpu_usage: XmlElem<string | null>;
  memory_usage: XmlElem<string | null>;
}

interface SystemInfoDocumentSystemInfo {
  system: XmlElem<SystemInfoDocumentSystemInfoSystem | null>;
  processes: XmlMultiElem<SystemInfoDocumentSystemInfoProcess | null>;
}

interface SystemInfoDocumentServerAgent {
  name: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  thread_id: XmlElem<string | null>;
}

interface SystemInfoDocumentUnibridgeInfoOverall {
  unibridge_info: XmlElem<string | null>;
  overall_requests: XmlElem<string | null>;
  average_request_time: XmlElem<string | null>;
  memory_occupied: XmlElem<string | null>;
  memory_available: XmlElem<string | null>;
  active_requests: XmlElem<string | null>;
}

interface SystemInfoDocumentUnibridgeInfoThread {
  id: XmlElem<string | null>;
  xquery: XmlElem<string | null>;
  sql: XmlElem<string | null>;
  count_sql: XmlElem<string | null>;
  fetch_counter: XmlElem<string | null>;
  self_connection: XmlElem<string | null>;
  rtl: XmlElem<string | null>;
  state: XmlElem<string | null>;
}

interface SystemInfoDocumentUnibridgeInfoProcess {
  session_id: XmlElem<string | null>;
  user_process: XmlElem<string | null>;
  login: XmlElem<string | null>;
  database: XmlElem<string | null>;
  task_state: XmlElem<string | null>;
  command: XmlElem<string | null>;
  application: XmlElem<string | null>;
  wait_time: XmlElem<string | null>;
  wait_type: XmlElem<string | null>;
  wait_resource: XmlElem<string | null>;
  blocked_by: XmlElem<string | null>;
  head_blocker: XmlElem<string | null>;
  total_cpu: XmlElem<string | null>;
  total_physical_io: XmlElem<string | null>;
  memory_use: XmlElem<string | null>;
  open_transactions: XmlElem<string | null>;
  login_time: XmlElem<string | null>;
  last_request_start_time: XmlElem<string | null>;
  host_name: XmlElem<string | null>;
  net_address: XmlElem<string | null>;
  execution_context_id: XmlElem<string | null>;
  sql: XmlElem<string | null>;
}

interface SystemInfoDocumentUnibridgeInfo {
  overall: XmlElem<SystemInfoDocumentUnibridgeInfoOverall | null>;
  threads: XmlMultiElem<SystemInfoDocumentUnibridgeInfoThread | null>;
  processes: XmlMultiElem<SystemInfoDocumentUnibridgeInfoProcess | null>;
}

interface SystemInfoDocumentXhttpInfoRequest {
  life_time: XmlElem<string | null>;
  method: XmlElem<string | null>;
  url: XmlElem<string | null>;
  description: XmlElem<string | null>;
  current_activity: XmlElem<string | null>;
  user: XmlElem<string | null>;
  thread_id: XmlElem<string | null>;
}

interface SystemInfoDocumentXhttpInfoThread {
  life_time: XmlElem<string | null>;
  type: XmlElem<string | null>;
  description: XmlElem<string | null>;
  current_activity: XmlElem<string | null>;
  thread_id: XmlElem<string | null>;
}

interface SystemInfoDocumentXhttpInfoLdsSession {
  life_time: XmlElem<string | null>;
  id: XmlElem<string | null>;
  idle_time: XmlElem<string | null>;
  cursors: XmlElem<string | null>;
  login: XmlElem<string | null>;
}

interface SystemInfoDocumentXhttpInfo {
  info: XmlElem<string | null>;
  build: XmlElem<string | null>;
  url: XmlElem<string | null>;
  requests: XmlMultiElem<SystemInfoDocumentXhttpInfoRequest | null>;
  threads: XmlMultiElem<SystemInfoDocumentXhttpInfoThread | null>;
  lds_sessions: XmlMultiElem<SystemInfoDocumentXhttpInfoLdsSession | null>;
}

type SystemInfoDocumentTopElem = XmlTopElem & {
  Doc: SystemInfoDocument;
  file_url: XmlElem<string | null>;
  db_type: XmlElem<string | null>;
  system_info: XmlElem<SystemInfoDocumentSystemInfo | null>;
  active_notifications: XmlElem<string | null>;
  server_agents: XmlMultiElem<SystemInfoDocumentServerAgent | null>;
  unibridge_info: XmlElem<SystemInfoDocumentUnibridgeInfo | null>;
  xhttp_info: XmlElem<SystemInfoDocumentXhttpInfo | null>;
  getSystemInfo(input: unknown): unknown;
};

type SystemInfoDocument = XmlDocument & {
  TopElem: SystemInfoDocumentTopElem;
  system_info: SystemInfoDocumentTopElem;
};
