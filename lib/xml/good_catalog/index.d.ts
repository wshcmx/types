type GoodCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AccessDocBase & {
  /** Тип товара */
  good_type_id: XmlElem<number | null, GoodTypeCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /**
   * Состояние
   * @default active
   */
  state_id: XmlElem<string, typeof common.good_states>;
  /** Не доступно для выбора в магазине */
  is_cant_chose: XmlElem<boolean | null>;
  /** Общая стоимость */
  cost_desc: XmlElem<string | null>;
  /** Стоимость в Магазине призов */
  bonus_shop_cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_ids: XmlMultiElemObject<string | null, typeof lists.currency_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** @default unlimit */
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
