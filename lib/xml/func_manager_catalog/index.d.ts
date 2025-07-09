type FuncManagerCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Должность подчиненного */
  subordinate_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /**
   * Тип объекта
   * @default collaborator
   */
  staff_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  staff_object_id: XmlElem<number | null>;
  /** Название объекта */
  staff_object_name: XmlElem<string | null>;
  /**
   * Является фактическим
   * @default false
   */
  is_native: XmlElem<boolean>;
  /** Тип функционального руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Дата начала действия */
  start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  end_date: XmlElem<Date | null>;
  /**
   * Действие назначения прекращено
   * @default false
   */
  is_finished: XmlElem<boolean | null>;
  /** Родительский объект */
  parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
