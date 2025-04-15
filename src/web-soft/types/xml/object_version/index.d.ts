type ObjectVersionDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ObjectVersionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Каталог */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Дата модификации */
  object_modification_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_xml: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectVersionDocument = XmlDocument & {
  TopElem: ObjectVersionDocumentTopElem;
  object_version: ObjectVersionDocumentTopElem;
  DocDesc(): string;
};
