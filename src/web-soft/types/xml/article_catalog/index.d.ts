type ArticleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Родительская статья */
  parent_object_id: XmlElem<number | null, ArticleCatalogDocumentTopElem>;
  /** Справка */
  book_id: XmlElem<number | null, BookCatalogDocumentTopElem>;
  /** Материал библиотеки */
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
