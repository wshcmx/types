interface SubdivisionGroupDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
}

interface SubdivisionGroupDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface SubdivisionGroupDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null>;
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
}

type SubdivisionGroupDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
RequirementsBase &
ViewConditionsBase & {
  Doc: SubdivisionGroupDocument;
  /**
   * Является динамической
   * @default false
   */
  is_dynamic: XmlElem<boolean>;
  /** Сотрудники */
  subdivisions: XmlMultiElem<SubdivisionGroupDocumentSubdivision | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionGroupDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Тип графика */
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<SubdivisionGroupDocumentView | null>;
  dynamic_select_subdivision(clearList: unknown): unknown;
  dynamic_select_person(clearList: unknown): unknown;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default name
   */
  row_disp_elem: XmlElem<string>;
  /**
   * @temp
   * @default .Env.ListElem
   */
  row_list_field: XmlElem<string | null>;
  /**
   * @temp
   * @default .PrimaryKey
   */
  row_key_field: XmlElem<string | null>;
  start_action(type: string): number;
};

type SubdivisionGroupDocument = XmlDocument & {
  TopElem: SubdivisionGroupDocumentTopElem;
  subdivision_group: SubdivisionGroupDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
