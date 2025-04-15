type ClassificationModelCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Требуемая вероятность классификации */
  required_probability: XmlElem<number | null>;
  /** Библиотека модели */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Библиотека обработки классификаторов */
  processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
