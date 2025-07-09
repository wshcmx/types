type PersonnelDocumentTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Допустимые типы подписи со стороны организации */
  org_signature_types: XmlMultiElemObject<string | null, typeof common.signature_types>;
  /** Допустимые типы подписи со стороны сотрудника */
  person_signature_types: XmlMultiElemObject<string | null, typeof common.signature_types>;
  /**
   * Первый подписывает сотрудник
   * @default false
   */
  person_first_signature: XmlElem<boolean>;
  /** Печатная форма */
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  /** HTML вставка подписи */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Код кадрового мероприятия */
  personnel_event_code: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
