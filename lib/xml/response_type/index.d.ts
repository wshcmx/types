type ResponseTypeDocumentTopElem = XmlTopElem & {
  Doc: ResponseTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * После создания переходить на
   * @default responses
   */
  create_redirect: XmlElem<string | null>;
  /** Основное поле с описанием */
  basic_desc_field: XmlElem<string | null>;
  /** Основное поле с оценкой */
  basic_score_field: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ResponseTypeDocument = XmlDocument & {
  TopElem: ResponseTypeDocumentTopElem;
  response_type: ResponseTypeDocumentTopElem;
  DocDesc(): string;
};
