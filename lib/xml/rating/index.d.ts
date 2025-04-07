interface RatingDocumentObject {
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
}

type RatingDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: RatingDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Оценивающий сотрудник */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  /**
   * Статус
   * @default false
   */
  status: XmlElem<boolean>;
  /** Объекты */
  objects: XmlMultiElem<RatingDocumentObject | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type RatingDocument = XmlDocument & {
  TopElem: RatingDocumentTopElem;
  rating: RatingDocumentTopElem;
  DocDesc(): string;
};
