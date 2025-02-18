interface KpiValueDocumentCustomDataHeaderColumn {
  title: XmlElem<string | null>;
  /** @default string */
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiValueDocumentCustomDataHeader {
  column: XmlMultiElemObject<KpiValueDocumentCustomDataHeaderColumn | null>;
}

interface KpiValueDocumentCustomDataDataRowColumn {
  value: XmlElem<string | null>;
}

interface KpiValueDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiValueDocumentCustomDataDataRowColumn | null>;
}

interface KpiValueDocumentCustomDataData {
  row: XmlMultiElemObject<KpiValueDocumentCustomDataDataRow | null>;
}

interface KpiValueDocumentCustomData {
  header: XmlElem<KpiValueDocumentCustomDataHeader | null>;
  data: XmlElem<KpiValueDocumentCustomDataData | null>;
}

interface KpiValueDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiValueDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiValueDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type KpiValueDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiValueDocument;
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
  custom_data: XmlElem<KpiValueDocumentCustomData | null>;
  /** Факт */
  fact: XmlElem<number | null>;
  fact_text: XmlElem<string | null>;
  fact_value: XmlElem<number | null>;
  /** Значение */
  value: XmlElem<number | null>;
  /** Каталог объектов */
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** ID объекта */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  experts: XmlMultiElem<KpiValueDocumentExpert | null>;
  workflow_matchings: XmlMultiElem<KpiValueDocumentWorkflowMatching | null>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<KpiValueDocumentView | null>;
  obtain_custom_data(kPITopElem: XmlTopElem, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiValueDocument = XmlDocument & {
  TopElem: KpiValueDocumentTopElem;
  kpi_value: KpiValueDocumentTopElem;
  DocDesc(): string;
};
