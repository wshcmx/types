type PersonnelCommitteeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string | null, typeof common.personnel_committee_status_types>;
  /**
   * Статус состава участников
   * @default not_confirmed
   */
  participants_status: XmlElem<string, typeof common.committee_member_status_types>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата проведения */
  committee_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  OnBuild(): void;
};
