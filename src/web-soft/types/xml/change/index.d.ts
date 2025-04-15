type ChangeDocumentTopElem = XmlTopElem & {
  Doc: ChangeDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Тип объекта
   * @default document
   */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ChangeDocument = XmlDocument & {
  TopElem: ChangeDocumentTopElem;
  change: ChangeDocumentTopElem;
  DocDesc(): string;
};
