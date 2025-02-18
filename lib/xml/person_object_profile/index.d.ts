interface PersonObjectProfileDocumentPersonObjectLinkObject {
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  /** @default false */
  can_edit: XmlElem<boolean>;
  /** @default false */
  can_delete: XmlElem<boolean>;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
}

interface PersonObjectProfileDocumentPersonObjectLink {
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** @default false */
  all_can_create: XmlElem<boolean>;
  /** @default false */
  all_can_edit: XmlElem<boolean>;
  /** @default false */
  all_can_delete: XmlElem<boolean>;
  max_amount: XmlElem<number | null>;
  max_total_size: XmlElem<number | null>;
  max_object_size: XmlElem<number | null>;
  objects: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLinkObject | null>;
}

type PersonObjectProfileDocumentTopElem = XmlTopElem & {
  Doc: PersonObjectProfileDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  person_object_links: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLink | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PersonObjectProfileDocument = XmlDocument & {
  TopElem: PersonObjectProfileDocumentTopElem;
  person_object_profile: PersonObjectProfileDocumentTopElem;
  DocDesc(): string;
};
