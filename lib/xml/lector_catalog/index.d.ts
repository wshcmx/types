type LectorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /**
   * Тип преподавателя
   * @default invitee
   */
  type: XmlElem<string, typeof common.lector_types>;
  /** ФИО преподавателя */
  lector_fullname: XmlElem<string | null>;
  /** ID внутреннего преподавателя */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО преподавателя */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Подразделение */
  person_subdivision_name: XmlElem<string | null>;
  /** E-mail */
  email: XmlElem<string | null>;
  /**
   * Является уволенным
   * @default false
   */
  is_dismiss: XmlElem<boolean>;
  /**
   * Разрешена публикация на портале описания и контактной информации
   * @default false
   */
  allow_publication: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
