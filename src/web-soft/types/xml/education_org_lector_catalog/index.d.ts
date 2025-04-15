type EducationOrgLectorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Учебная организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Условное название */
  disp_name: XmlElem<string | null>;
  /** Является поставщиком электронных курсов */
  is_provider_courses: XmlElem<boolean>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  /** ID внутреннего преподавателя */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО преподавателя */
  person_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
