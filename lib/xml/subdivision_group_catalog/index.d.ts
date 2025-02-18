type SubdivisionGroupCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Признак динамической группы
   * @default false
   */
  is_dynamic: XmlElem<boolean>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профили KPI */
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
