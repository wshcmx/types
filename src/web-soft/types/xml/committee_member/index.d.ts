type CommitteeMemberDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CommitteeMemberDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип объекта
   * @default collaborator
   */
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Роль */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /**
   * Тип участника проекта
   * @default participant
   */
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  /**
   * Статус
   * @default not_confirmed
   */
  status: XmlElem<string, typeof common.committee_member_status_types>;
  /** Кадровый комитет */
  personnel_committee_id: XmlElem<number | null, PersonnelCommitteeCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type CommitteeMemberDocument = XmlDocument & {
  TopElem: CommitteeMemberDocumentTopElem;
  committee_member: CommitteeMemberDocumentTopElem;
  DocDesc(): string;
};
