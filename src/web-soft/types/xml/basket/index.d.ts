interface BasketDocumentGood {
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  /** @default 0 */
  number: XmlElem<number>;
  reserved_date: XmlElem<Date | null>;
}

type BasketDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: BasketDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<BasketDocumentGood | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type BasketDocument = XmlDocument & {
  TopElem: BasketDocumentTopElem;
  basket: BasketDocumentTopElem;
  DocDesc(): string;
};
