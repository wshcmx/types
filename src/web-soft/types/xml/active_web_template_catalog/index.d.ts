type ActiveWebTemplateCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
  /** Роль сотрудника */
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  hash: XmlElem<string | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
