interface SubdivisionDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface SubdivisionDocumentView extends DescBase {
  /**
   * @temp
   * @default false
   */
  do_update_document_persons: XmlElem<boolean>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
  /**
   * @temp
   * Классификатор
   */
  knowledge_classifier_id: XmlElem<number | null>;
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
  /** @temp */
  drop_pers_hier_entry: XmlElem<boolean | null>;
}

type SubdivisionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
DocumentPersonsBase & {
  Doc: SubdivisionDocument;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Родительское подразделение */
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /**
   * Подразделение расформировано
   * @default false
   */
  is_disbanded: XmlElem<boolean | null>;
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null, LngCatalogDocumentTopElem>;
  /** Расположение файлов учебных материалов */
  location_id: XmlElem<string | null, typeof lists.locations>;
  /** Время доступа с */
  access_time_start: XmlElem<string | null>;
  /** Время доступа по */
  access_time_end: XmlElem<string | null>;
  /**
   * Показывать подробную информацию
   * @default true
   */
  show_detailed: XmlElem<boolean | null>;
  /**
   * Показывать информацию о дочерних подразделениях
   * @default false
   */
  show_children: XmlElem<boolean | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Тип графика */
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Дата расформирования */
  disbanded_date: XmlElem<Date | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /**
   * Факультет
   * @default false
   */
  is_faculty: XmlElem<boolean>;
  outstaff: XmlElem<OutstaffPeriodsBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<SubdivisionDocumentView | null>;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default fullname
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

type SubdivisionDocument = XmlDocument & {
  TopElem: SubdivisionDocumentTopElem;
  subdivision: SubdivisionDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  DocDesc(): string;
};
