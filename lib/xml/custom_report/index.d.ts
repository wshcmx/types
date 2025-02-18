interface CustomReportDocumentWebSettings {
  table_height: XmlElem<number | null>;
  /** @default table */
  default_mode: XmlElem<string>;
}

interface CustomReportDocumentSubscribe {
  /** @default false */
  on: XmlElem<boolean>;
  days_period: XmlElem<number | null>;
  format: XmlElem<string | null>;
}

interface CustomReportDocumentViewPathSub {
  id: XmlElem<number | null, SubCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, SubCatalogDocumentTopElem>;
}

interface CustomReportDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  path_subs: XmlMultiElem<CustomReportDocumentViewPathSub | null>;
}

type CustomReportDocumentTopElem = XmlTopElem &
CustomReportBase & {
  Doc: CustomReportDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Раздел */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  connect_2_object: XmlElem<string | null>;
  mode_selector: XmlElem<number | null>;
  source_binding_object: XmlElem<string | null>;
  web_settings: XmlElem<CustomReportDocumentWebSettings | null>;
  subscribe: XmlElem<CustomReportDocumentSubscribe | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  access: XmlElem<AccessDocBase | null>;
  /** @default 0 */
  binding_selection: XmlElem<number>;
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  perfomance_cutoff: XmlElem<number | null>;
  build_report_v2(taskId: string, meta: boolean): unknown;
  buildCustomReportQuery(tOPELEM: unknown, taskId: string): unknown;
  UI_CoreModeChangeHandler(newValue: unknown): unknown;
  UI_CoreObjectChangeHandler(fieldSource: unknown, newValue: unknown): unknown;
  SetModeSelector(imode: unknown): unknown;
  /** @temp */
  view: XmlElem<CustomReportDocumentView | null>;
};

type CustomReportDocument = XmlDocument & {
  TopElem: CustomReportDocumentTopElem;
  custom_report: CustomReportDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
