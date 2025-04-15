type LevelCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Предыдущий уровень */
  prev_level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
