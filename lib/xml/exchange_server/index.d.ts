interface ExchangeBaseDocumentExchangeObjectFilter extends ViewConditionsBase {
  scheme_id: XmlElem<string | null, typeof lists.view_conditions_schemes>;
}

interface ExchangeBaseDocumentExchangeObject {
  name: XmlElem<string | null, typeof common.exchange_object_types>;
  filter: XmlElem<ExchangeBaseDocumentExchangeObjectFilter | null>;
  /** @default false */
  is_invariable: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
}

type ExchangeBaseDocumentTopElem = XmlTopElem & {
  Doc: ExchangeBaseDocument;
  /** @default smtp */
  exchange_protocol: XmlElem<string>;
  http_server_url: XmlElem<string | null>;
  smtp_mail_address: XmlElem<string | null>;
  smtp_server_url: XmlElem<string | null>;
  /** @default false */
  use_smtp_authenticate: XmlElem<boolean>;
  smtp_login: XmlElem<string | null>;
  smtp_password: XmlElem<string | null>;
  /** @default last_exchange */
  exchange_type: XmlElem<string, typeof common.upload_types>;
  /** @default false */
  only_create: XmlElem<boolean>;
  lately_exchange_date: XmlElem<Date | null>;
  /** @default 30 */
  lately_exchange_period: XmlElem<number | null>;
  /** Лимит количества записей в одном пакете */
  limit_count: XmlElem<number | null>;
  /** @default true */
  allow_enlarge_period: XmlElem<boolean>;
  /** @default all */
  exchange_objects_type: XmlElem<string>;
  exchange_objects: XmlMultiElem<ExchangeBaseDocumentExchangeObject | null>;
  /** @default true */
  use_basic_authenticate: XmlElem<boolean>;
  /** @default true */
  is_wt_to_wt: XmlElem<boolean>;
  /** @default false */
  process_deleted_objects: XmlElem<boolean>;
  /** @default false */
  process_custom_templates: XmlElem<boolean>;
  /** @default false */
  process_lists: XmlElem<boolean>;
  /** @default false */
  process_access_roles: XmlElem<boolean>;
  /** @default all */
  exchange_object_select_type: XmlElem<string>;
  filter_text: XmlElem<string | null>;
  /** @default false */
  is_invariable: XmlElem<boolean>;
  process_eval: XmlElem<string | null>;
};

type ExchangeBaseDocument = XmlDocument & {
  TopElem: ExchangeBaseDocumentTopElem;
  exchange_base: ExchangeBaseDocumentTopElem;
  exchange_server: XmlElem<unknown | null>;
  DocDesc(): string;
};
