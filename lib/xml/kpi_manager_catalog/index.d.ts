type KpiManagerCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип объекта */
  manager_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Сотрудник */
  manager_id: XmlElem<number | null>;
  /** ФИО сотрудника */
  manager_name: XmlElem<string | null>;
  is_owner: XmlElem<boolean | null>;
  /** Тип функционального руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
