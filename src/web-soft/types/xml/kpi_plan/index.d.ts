interface KpiPlanDocumentCustomDataHeaderColumn {
  title: XmlElem<string | null>;
  /** @default string */
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiPlanDocumentCustomDataHeader {
  column: XmlMultiElemObject<KpiPlanDocumentCustomDataHeaderColumn | null>;
}

interface KpiPlanDocumentCustomDataDataRowColumn {
  value: XmlElem<string | null>;
}

interface KpiPlanDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiPlanDocumentCustomDataDataRowColumn | null>;
}

interface KpiPlanDocumentCustomDataData {
  row: XmlMultiElemObject<KpiPlanDocumentCustomDataDataRow | null>;
}

interface KpiPlanDocumentCustomData {
  header: XmlElem<KpiPlanDocumentCustomDataHeader | null>;
  data: XmlElem<KpiPlanDocumentCustomDataData | null>;
}

interface KpiPlanDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiPlanDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiPlanDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type KpiPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** КПЭ */
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Ответственный */
  responsible_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  end_date: XmlElem<Date | null>;
  custom_data: XmlElem<KpiPlanDocumentCustomData | null>;
  /** Минимальное значение */
  threshold: XmlElem<string | null>;
  threshold_text: XmlElem<string | null>;
  threshold_value: XmlElem<number | null>;
  /** Максимальное значение */
  challenge: XmlElem<string | null>;
  challenge_text: XmlElem<string | null>;
  challenge_value: XmlElem<number | null>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  /** Каталог объектов */
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** ID объекта */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  experts: XmlMultiElem<KpiPlanDocumentExpert | null>;
  workflow_matchings: XmlMultiElem<KpiPlanDocumentWorkflowMatching | null>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<KpiPlanDocumentView | null>;
  obtain_custom_data(kPITopElem: XmlTopElem, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiPlanDocument = XmlDocument & {
  TopElem: KpiPlanDocumentTopElem;
  kpi_plan: KpiPlanDocumentTopElem;
  DocDesc(): string;
};
