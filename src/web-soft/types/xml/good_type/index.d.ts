type GoodTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: GoodTypeDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Тип заявки */
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type GoodTypeDocument = XmlDocument & {
  TopElem: GoodTypeDocumentTopElem;
  good_type: GoodTypeDocumentTopElem;
  DocDesc(): string;
};
