type RequestCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Тип заявки */
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status_id: XmlElem<string, typeof common.request_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Название организации сотрудника */
  person_org_name: XmlElem<string | null>;
  /**
   * Заявка групповая
   * @default false
   */
  is_group: XmlElem<boolean>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
