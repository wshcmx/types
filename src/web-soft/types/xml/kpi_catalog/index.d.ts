type KpiCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** KPI */
  parent_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default auto
   */
  type: XmlElem<string | null, typeof common.kpi_types>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string | null, typeof common.kpi_states>;
  /** @default true */
  is_kpi: XmlElem<boolean>;
  /** Группа */
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  /** Минимальное значение */
  range_min: XmlElem<number | null>;
  /** Максимальное значение */
  range_max: XmlElem<number | null>;
  /** Владельцы */
  owners_ids: XmlElem<string | null>;
  /** Формула */
  formula_id: XmlElem<number | null, FormulaCatalogDocumentTopElem>;
  /** Шкала */
  scale_id: XmlElem<number | null, ScaleCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Блок */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** ID тегов */
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Предыдущая версия */
  previous_version_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  OnBuild(): void;
};
