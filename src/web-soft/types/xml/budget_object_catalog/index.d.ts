type BudgetObjectCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Бюджет */
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Каталог */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Выбирать все объекты
   * @default false
   */
  all: XmlElem<boolean>;
  /** Объект */
  object_id: XmlElem<number | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
