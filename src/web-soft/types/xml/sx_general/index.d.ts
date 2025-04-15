interface SpxmlMachineSettingsBaseLds {
  address: XmlElem<string | null>;
  use_https: XmlElem<boolean>;
}

interface SpxmlMachineSettingsBase {
  is_shared_install: XmlElem<boolean>;
  use_sep_data: XmlElem<boolean>;
  use_machine_lds: XmlElem<boolean>;
  use_lds: XmlElem<boolean>;
  lds: XmlElem<SpxmlMachineSettingsBaseLds | null>;
}

interface SpxmlSettingsBaseProxy {
  address: XmlElem<string | null>;
  port: XmlElem<number | null>;
}

interface SpxmlSettingsBaseProxyAuth {
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  password_ed: XmlElem<string | null>;
  /** @default true */
  save_password: XmlElem<boolean>;
}

interface SpxmlSettingsBaseLds {
  address: XmlElem<string | null>;
  use_https: XmlElem<boolean>;
}

interface SpxmlSettingsBaseLogs {
  http: XmlElem<boolean>;
  lds: XmlElem<boolean>;
  mail_trans: XmlElem<boolean>;
}

interface SpxmlSettingsBase {
  /** @default true */
  use_wininet: XmlElem<boolean>;
  use_proxy: XmlElem<boolean>;
  proxy: XmlElem<SpxmlSettingsBaseProxy | null>;
  proxy_auth: XmlElem<SpxmlSettingsBaseProxyAuth | null>;
  use_lds: XmlElem<boolean>;
  lds: XmlElem<SpxmlSettingsBaseLds | null>;
  use_sep_sn: XmlElem<boolean>;
  /** @default mapi */
  mail_send_method_id: XmlElem<string>;
  /** @default true */
  use_list_async_update: XmlElem<boolean>;
  disable_list_auto_update: XmlElem<boolean>;
  logs: XmlElem<SpxmlSettingsBaseLogs | null>;
}
