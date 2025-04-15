interface PersonnelDocumentTypeDocumentOrgSignatureGroup {
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Сколько подписей необходимо */
  signature_num: XmlElem<number | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Код юридического лица */
  essential_id: XmlElem<string | null>;
}

type PersonnelDocumentTypeDocumentTopElem = XmlTopElem & {
  Doc: PersonnelDocumentTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Допустимые типы подписи со стороны организации */
  org_signature_types: XmlMultiElemObject<string | null, typeof common.signature_types>;
  /**
   * Первый подписывает сотрудник
   * @default false
   */
  person_first_signature: XmlElem<boolean>;
  /** Допустимые типы подписи со стороны сотрудника */
  person_signature_types: XmlMultiElemObject<string | null, typeof common.signature_types>;
  /** Печатная форма */
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  /** HTML вставка подписи */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Код кадрового мероприятия */
  personnel_event_code: XmlElem<string | null>;
  /** Подписывают со стороны организации */
  org_signature_groups: XmlMultiElem<PersonnelDocumentTypeDocumentOrgSignatureGroup | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type PersonnelDocumentTypeDocument = XmlDocument & {
  TopElem: PersonnelDocumentTypeDocumentTopElem;
  personnel_document_type: PersonnelDocumentTypeDocumentTopElem;
  DocDesc(): string;
};
