type VacationDayCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Юридическое лицо */
  org_code: XmlElem<string | null>;
  /** Дата изменения */
  update_date: XmlElem<Date | null>;
  /** Остаток */
  balance: XmlElem<number | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Пользователь */
  creation_user_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Пользователь */
  modification_user_id: XmlElem<number | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
