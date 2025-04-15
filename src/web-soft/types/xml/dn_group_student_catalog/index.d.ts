type DnGroupStudentCatalogDocumentTopElem = XmlTopElem &
PersonBase & {
  id: XmlElem<number | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  /** Статус договора */
  status_id: XmlElem<string | null, typeof common.student_states>;
  main_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
