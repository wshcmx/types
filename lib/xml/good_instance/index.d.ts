type GoodInstanceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: GoodInstanceDocument;
  /**
   * Статус
   * @default in_stock
   */
  status: XmlElem<string, typeof common.good_instance_status_types>;
  /** Товар */
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата резервирования */
  reserved_date: XmlElem<Date | null>;
  /** Дата оплаты */
  paid_date: XmlElem<Date | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  clear_status(): unknown;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type GoodInstanceDocument = XmlDocument & {
  TopElem: GoodInstanceDocumentTopElem;
  good_instance: GoodInstanceDocumentTopElem;
  DocDesc(): string;
};
