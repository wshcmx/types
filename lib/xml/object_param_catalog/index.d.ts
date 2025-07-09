type ObjectParamCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Дополнительный идентификатор */
  sec_object_code: XmlElem<string | null>;
  /** Тип базового объекта */
  base_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** ID базового объекта */
  base_object_id: XmlElem<number | null>;
  /** Название связанного объекта */
  base_object_name: XmlElem<string | null>;
  OnBuild(): void;
};
