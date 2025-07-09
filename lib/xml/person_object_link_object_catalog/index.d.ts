type PersonObjectLinkObjectCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  person_object_id: XmlElem<number | null>;
  person_object_type: XmlElem<string | null>;
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  subject_id: XmlElem<number | null>;
  subject_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  can_edit: XmlElem<boolean | null>;
  can_delete: XmlElem<boolean | null>;
  /** Уровень доступа */
  access_level: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
