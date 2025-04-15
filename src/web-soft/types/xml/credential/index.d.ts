type CredentialDocumentTopElem = XmlTopElem & {
  Doc: CredentialDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default basic
   */
  type: XmlElem<string>;
  /** Логин */
  login: XmlElem<string | null>;
  /** Пароль */
  password: XmlElem<string | null>;
  /** Профиль безопасности */
  remote_security_profile_id: XmlElem<number | null, RemoteSecurityProfileCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type CredentialDocument = XmlDocument & {
  TopElem: CredentialDocumentTopElem;
  credential: CredentialDocumentTopElem;
  DocDesc(): string;
};
