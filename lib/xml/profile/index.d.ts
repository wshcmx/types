interface ProfileDocumentRequestAgentAccount {
  homePage: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ProfileDocumentRequestAgent {
  /** @default Agent */
  objectType: XmlElem<string | null>;
  name: XmlElem<string | null>;
  mbox: XmlElem<string | null>;
  mbox_sha1sum: XmlElem<string | null>;
  openid: XmlElem<string | null>;
  account: XmlElem<ProfileDocumentRequestAgentAccount | null>;
}

interface ProfileDocumentRequest {
  content_type: XmlElem<string | null>;
  json_str: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  agent: XmlElem<ProfileDocumentRequestAgent | null>;
}

type ProfileDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ProfileDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип учебной активности */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  request: XmlElem<ProfileDocumentRequest | null>;
  hash(): string;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ProfileDocument = XmlDocument & {
  TopElem: ProfileDocumentTopElem;
  profile: ProfileDocumentTopElem;
  DocDesc(): string;
};
