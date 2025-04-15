type PrintFormDocumentTopElem = XmlTopElem &
InsertFileBase & {
  Doc: PrintFormDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default xml_word
   */
  type: XmlElem<string | null, typeof common.print_form_types>;
  /**
   * Кодировка
   * @default utf-8
   */
  file_encoding: XmlElem<string | null, typeof common.encoding_types>;
  /**
   * Ориентация
   * @default 0
   */
  orientation: XmlElem<number | null>;
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
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type PrintFormDocument = XmlDocument & {
  TopElem: PrintFormDocumentTopElem;
  print_form: PrintFormDocumentTopElem;
  DocDesc(): string;
};
