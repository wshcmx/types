type AiModelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: AiModelDocument;
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
  params_block: XmlElem<WebVariablesBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
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
};

type AiModelDocument = XmlDocument & {
  TopElem: AiModelDocumentTopElem;
  ai_model: AiModelDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
