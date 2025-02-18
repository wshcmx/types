interface PersonObjectLinkDocumentObject {
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  /** @default false */
  can_edit: XmlElem<boolean>;
  /** @default false */
  can_delete: XmlElem<boolean>;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
}

type PersonObjectLinkDocumentTopElem = XmlTopElem & {
  Doc: PersonObjectLinkDocument;
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  subject_id: XmlElem<number | null>;
  subject_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Каталог объекта */
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Заголовок */
  title(): string;
  /**
   * Может создавать
   * @default false
   */
  all_can_create: XmlElem<boolean>;
  amount: XmlElem<number | null>;
  /**
   * Может редактировать
   * @default false
   */
  all_can_edit: XmlElem<boolean>;
  /**
   * Может удалять
   * @default false
   */
  all_can_delete: XmlElem<boolean>;
  objects: XmlMultiElem<PersonObjectLinkDocumentObject | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PersonObjectLinkDocument = XmlDocument & {
  TopElem: PersonObjectLinkDocumentTopElem;
  person_object_link: PersonObjectLinkDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
