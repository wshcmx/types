type AiModelCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /**
   * Тип модели
   * @default ai
   */
  type_id: XmlElem<string | null, typeof common.ai_model_types>;
  /** Библиотека модели */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Библиотека */
  library: XmlElem<string | null>;
  /** Instance */
  instance: XmlElem<string | null>;
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
