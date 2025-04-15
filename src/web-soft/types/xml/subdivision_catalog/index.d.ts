type SubdivisionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /**
   * Подразделение расформировано
   * @default false
   */
  is_disbanded: XmlElem<boolean | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профили KPI */
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /**
   * Факультет
   * @default false
   */
  is_faculty: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
