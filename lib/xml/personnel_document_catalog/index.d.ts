type PersonnelDocumentCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Номер документа */
  number: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата ознакомления */
  acquaint_date: XmlElem<Date | null>;
  /** Дата подписания */
  sign_date: XmlElem<Date | null>;
  /**
   * Состояние
   * @default project
   */
  state_id: XmlElem<string | null, typeof common.personnel_document_states>;
  /** Дата подписания сотрудником */
  person_signature_date: XmlElem<Date | null>;
  /** Url файла со структурой */
  wredc_data_url: XmlElem<string | null>;
  /** Тип кадрового документа */
  personnel_document_type_id: XmlElem<number | null, PersonnelDocumentTypeCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
