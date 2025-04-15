type StatementActorDocumentTopElem = XmlTopElem & {
  Doc: StatementActorDocument;
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
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementActorDocument = XmlDocument & {
  TopElem: StatementActorDocumentTopElem;
  statement_actor: StatementActorDocumentTopElem;
};
