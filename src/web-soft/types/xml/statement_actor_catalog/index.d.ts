type StatementActorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Путь */
  path: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null>;
  /** Сообщение учебной активности */
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  /** Адрес электронной почты */
  mbox: XmlElem<string | null>;
  /** Хэш адреса электронной почты */
  mbox_sha1sum: XmlElem<string | null>;
  /** OpenID агента */
  openid: XmlElem<string | null>;
  /** Адрес системы хранящей учетную запись */
  account_home_page: XmlElem<string | null>;
  /** Уникальное название учетной записи */
  account_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
