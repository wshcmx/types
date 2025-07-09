type ClShapeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Папка */
  category: XmlElem<string | null>;
  /** Категория */
  category_label: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Расшифровка типа */
  type_name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
