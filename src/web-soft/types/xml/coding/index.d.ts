type CodingDocumentTopElem = XmlTopElem & {
  Doc: CodingDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /**
   * Индекс
   * @default 1
   */
  next_index: XmlElem<number>;
  /**
   * Количество символов
   * @default 5
   */
  digits_num: XmlElem<number>;
  /**
   * Поле
   * @default code
   */
  field_name: XmlElem<string>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  obtain_code(): string;
};

type CodingDocument = XmlDocument & {
  TopElem: CodingDocumentTopElem;
  coding: CodingDocumentTopElem;
  DocDesc(): string;
};
