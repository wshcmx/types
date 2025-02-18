interface HostDocumentAuthRule extends WebVariablesBase {
  id: XmlElem<string | null>;
  user_agent: XmlElem<string | null>;
  /** Тип авторизации */
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
}

interface HostDocumentHeaderHost {
  /** Узел */
  host_name: XmlElem<string | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup {
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock {
  groups: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlockGroup | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg {
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock {
  orgs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlockOrg | null>;
}

interface HostDocumentWorkspaceConfigBlockWorkspaceConfig {
  /** Конфигурация Workspace */
  workspace_config_id: XmlElem<number | null, WorkspaceConfigCatalogDocumentTopElem>;
  group_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigGroupBlock | null>;
  org_block: XmlElem<HostDocumentWorkspaceConfigBlockWorkspaceConfigOrgBlock | null>;
}

interface HostDocumentWorkspaceConfigBlock {
  workspace_configs: XmlMultiElem<HostDocumentWorkspaceConfigBlockWorkspaceConfig | null>;
}

type HostDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase & {
  Doc: HostDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Имя узла или IP */
  hostname: XmlElem<string | null>;
  /** Порт */
  port: XmlElem<number | null>;
  /** Узел */
  host(): unknown;
  /**
   * Тип портала
   * @default default
   */
  portal_type: XmlElem<string, typeof common.portal_types>;
  /** Путь переадресации (referer URL) */
  referer_host_path: XmlElem<string | null>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Настройка мобильного приложения */
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  /**
   * Аутентификация на портале (по умолчанию)
   * @default basic
   */
  portal_auth_type: XmlElem<string>;
  /** Перенаправлять, если передан логин */
  redirect_login: XmlElem<string | null>;
  /** По ссылке (программный код, возвращающий строку с URL) */
  redirect_url_eval: XmlElem<string | null>;
  /** Формула логина */
  auth_login_eval: XmlElem<string | null>;
  /** Формула доступа */
  auth_pass_eval: XmlElem<string | null>;
  /** Программный код предварительного вычисления аутентификационных данных */
  auth_prev_eval: XmlElem<string | null>;
  /**
   * Логин чувствителен к регистру
   * @default false
   */
  login_case_sensitive: XmlElem<boolean>;
  /**
   * Требуется указание домена в логине
   * @default false
   */
  login_domen_sensitive: XmlElem<boolean>;
  /**
   * Название поля логина
   * @default user_login
   */
  auth_cookie_login: XmlElem<string>;
  /**
   * Название поля пароля
   * @default user_password
   */
  auth_cookie_pass: XmlElem<string>;
  /** Домен */
  auth_cookie_domain: XmlElem<string | null>;
  /** Период хранения (часов) */
  auth_cookie_period: XmlElem<number | null>;
  /**
   * Отображать поля для ввода логина и пароля
   * @default false
   */
  disp_login_pass: XmlElem<boolean>;
  /**
   * Разрешить авторизацию для интерфейса Администратора
   * @default false
   */
  allow_lds_auth: XmlElem<boolean>;
  /** Тип авторизации */
  auth_type_id: XmlElem<number | null, AuthTypeCatalogDocumentTopElem>;
  /** Дополнительные правила авторизации */
  auth_rules: XmlMultiElem<HostDocumentAuthRule | null>;
  /** Разрешенные узлы заголовка запроса */
  header_hosts: XmlMultiElem<HostDocumentHeaderHost | null>;
  /**
   * Регистрировать вход пользователей на портале
   * @default false
   */
  register_logged_in: XmlElem<boolean>;
  workspace_config_block: XmlElem<HostDocumentWorkspaceConfigBlock | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_auth_type(authType: Object, authRuleId: string): unknown;
  /** @temp */
  converter: XmlElem<boolean | null>;
};

type HostDocument = XmlDocument & {
  TopElem: HostDocumentTopElem;
  host: HostDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
