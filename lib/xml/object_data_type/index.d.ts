type ObjectDataTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ObjectDataTypeDocument;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Тип связанного объекта */
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ObjectDataTypeDocument = XmlDocument & {
  TopElem: ObjectDataTypeDocumentTopElem;
  object_data_type: ObjectDataTypeDocumentTopElem;
  DocDesc(): string;
};
