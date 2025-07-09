type ObjectExpertCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя сотрудника */
  person_fullname: XmlElem<string | null>;
  /** @default expert */
  type: XmlElem<string, typeof common.course_expert_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
