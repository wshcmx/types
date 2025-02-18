type FileSourceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: FileSourceDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /**
   * Доступен поиск по источнику
   * @default false
   */
  search_available: XmlElem<boolean>;
  /**
   * Доступен выбор файлов из источника
   * @default false
   */
  selection_available: XmlElem<boolean>;
  /** Выполняемый код */
  run_code: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
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
  /** @temp */
  path_filling_expr: XmlElem<boolean | null>;
};

type FileSourceDocument = XmlDocument & {
  TopElem: FileSourceDocumentTopElem;
  file_source: FileSourceDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
