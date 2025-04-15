type SocialEntryCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  parent_id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Сообщение блога */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  like_id: XmlElem<number | null, LikeCatalogDocumentTopElem>;
  OnBuild(): void;
  MatchDocType(): boolean;
};
