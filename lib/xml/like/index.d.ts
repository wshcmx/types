type LikeDocumentTopElem = XmlTopElem & {
  Doc: LikeDocument;
  name(): string;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /**
   * Тип реакции
   * @default like
   */
  type_id: XmlElem<string | null, typeof common.reaction_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Объект */
  sec_object_id: XmlElem<number | null>;
  /** Тип объекта */
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Реакция */
  reaction: XmlElem<string | null>;
  /** Сообщение */
  message_id: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Дата */
  create_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LikeDocument = XmlDocument & {
  TopElem: LikeDocumentTopElem;
  like: LikeDocumentTopElem;
  DocDesc(): string;
};
