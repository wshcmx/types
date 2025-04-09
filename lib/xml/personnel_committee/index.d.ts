interface PersonnelCommitteeDocumentView extends DescBase {
  /**
   * @temp
   * @default collaborator
   */
  participant_catalog: XmlElem<string, typeof common.exchange_object_types>;
  /**
   * @temp
   * @default collaborator
   */
  candidate_catalog: XmlElem<string, typeof common.exchange_object_types>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** @temp */
  participant_filter: XmlElem<AuFtFilter | null>;
}

type PersonnelCommitteeDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelCommitteeDocument;
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
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string, typeof common.personnel_committee_status_types>;
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
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<PersonnelCommitteeDocumentView | null>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): void;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default fullname
   */
  row_disp_elem: XmlElem<string>;
  /**
   * @temp
   * @default .Env.ListElem
   */
  row_list_field: XmlElem<string | null>;
  /**
   * @temp
   * @default .PrimaryKey
   */
  row_key_field: XmlElem<string | null>;
  /** @temp */
  list_variant: XmlElem<unknown | null>;
  start_action(type: string): number;
};

type PersonnelCommitteeDocument = XmlDocument & {
  TopElem: PersonnelCommitteeDocumentTopElem;
  personnel_committee: PersonnelCommitteeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
