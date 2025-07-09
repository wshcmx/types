type PersonObjectLinkCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  subject_id: XmlElem<number | null>;
  subject_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Каталог объекта */
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Может создавать */
  all_can_create: XmlElem<boolean | null>;
  /** Может редактировать */
  all_can_edit: XmlElem<boolean | null>;
  /** Может удалять */
  all_can_delete: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
