interface BonusProfileDocumentKpi {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
}

interface BonusProfileDocumentKpiGroup {
  /** Группа KPI */
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  /**
   * Вес
   * @default 0.0
   */
  weight: XmlElem<number>;
}

interface BonusProfileDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type BonusProfileDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: BonusProfileDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default 0
   */
  calc_type: XmlElem<number | null>;
  kpis: XmlMultiElem<BonusProfileDocumentKpi | null>;
  /** Группа KPI */
  kpi_groups: XmlMultiElem<BonusProfileDocumentKpiGroup | null>;
  script: XmlElem<string | null>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  evaluate_pa(pAId: number, pA: unknown): unknown;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<BonusProfileDocumentView | null>;
};

type BonusProfileDocument = XmlDocument & {
  TopElem: BonusProfileDocumentTopElem;
  bonus_profile: BonusProfileDocumentTopElem;
  DocDesc(): string;
};
