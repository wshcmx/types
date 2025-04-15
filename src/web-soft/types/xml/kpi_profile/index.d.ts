type KpiBaseDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KpiBaseDocument;
  /** Плановое значение */
  plan: XmlElem<string | null>;
  /** Порог */
  threshold: XmlElem<number | null>;
  /** Вызов */
  challenge: XmlElem<number | null>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
  kpi_plan_id: XmlElem<number | null, KpiPlanCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
};

type KpiBaseDocument = XmlDocument & {
  TopElem: KpiBaseDocumentTopElem;
  kpi_base: KpiBaseDocumentTopElem;
  kpi_profile: XmlElem<unknown | null>;
  DocDesc(): string;
};
