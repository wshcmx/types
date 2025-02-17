type ProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Текст Агента */
  agent_json_str: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип учебной активности */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  /** Тип учебной активности */
  activity_code: XmlElem<string | null>;
  hash: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
