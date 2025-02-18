interface LectorDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type LectorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
CustomElemsBase &
AdminAccessBase &
PathSubsBase & {
  Doc: LectorDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип
   * @default invitee
   */
  type: XmlElem<string, typeof common.lector_types>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Подразделение */
  person_subdivision_name: XmlElem<string | null>;
  /**
   * Разрешена публикация на портале описания и контактной информации
   * @default false
   */
  allow_publication: XmlElem<boolean>;
  /**
   * Является уволенным
   * @default false
   */
  is_dismiss: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<LectorDocumentView | null>;
  lector_fullname(): string;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type LectorDocument = XmlDocument & {
  TopElem: LectorDocumentTopElem;
  lector: LectorDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
