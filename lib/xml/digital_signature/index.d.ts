type DigitalSignatureDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DigitalSignatureDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата подписания */
  sign_date: XmlElem<Date | null>;
  /**
   * Подписана
   * @default false
   */
  is_signed: XmlElem<boolean>;
  /** Шаблон */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Подписанный документ */
  sign_open: XmlElem<string | null>;
  /** Цифровая подпись */
  sign_encrypted: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type DigitalSignatureDocument = XmlDocument & {
  TopElem: DigitalSignatureDocumentTopElem;
  digital_signature: DigitalSignatureDocumentTopElem;
  DocDesc(): string;
};
