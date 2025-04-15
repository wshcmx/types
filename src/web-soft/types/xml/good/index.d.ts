interface GoodDocumentCost {
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  sum: XmlElem<number | null>;
  limit: XmlElem<number | null>;
}

interface GoodDocumentView extends DescBase {
  filter: XmlElem<AuFtFilter | null>;
}

type GoodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: GoodDocument;
  /** Тип товара */
  good_type_id: XmlElem<number | null, GoodTypeCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string, typeof common.good_states>;
  /**
   * Не доступно для выбора в магазине
   * @default false
   */
  is_cant_chose: XmlElem<boolean>;
  costs: XmlMultiElem<GoodDocumentCost | null>;
  /** Общая стоимость */
  cost_desc(): unknown;
  /** Стоимость в Магазине призов */
  bonus_shop_cost(): number;
  /** @default unlimit */
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<GoodDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type GoodDocument = XmlDocument & {
  TopElem: GoodDocumentTopElem;
  good: GoodDocumentTopElem;
  DocDesc(): string;
};
