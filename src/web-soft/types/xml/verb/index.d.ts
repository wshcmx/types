type VerbDocumentTopElem = XmlTopElem & {
  Doc: VerbDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Обрабатывать данные */
  processed: XmlElem<boolean | null>;
  /** Ссылка на файл выполняемого кода */
  processing_code_url: XmlElem<string | null>;
  /** Программный код обработки данных */
  processing_code: XmlElem<string | null>;
  code_process(): void;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type VerbDocument = XmlDocument & {
  TopElem: VerbDocumentTopElem;
  verb: VerbDocumentTopElem;
  DocDesc(): string;
};
