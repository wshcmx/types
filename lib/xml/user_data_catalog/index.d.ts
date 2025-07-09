type UserDataCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  delete_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Пользователь */
  creation_user_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Пользователь */
  modification_user_id: XmlElem<number | null>;
  OnBuild(): void;
};
