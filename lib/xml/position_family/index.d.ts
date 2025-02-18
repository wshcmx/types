interface PositionFamilyDocumentCompetenceProfile {
  /** Профиль компетенций */
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionFamilyDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
}

interface PositionFamilyDocumentView extends DescBase {
  /**
   * @temp
   * Сортировать по
   * @default name
   */
  knowledge_sort_type_id: XmlElem<string | null>;
  /**
   * @temp
   * Классификатор
   */
  knowledge_classifier_id: XmlElem<number | null>;
}

type PositionFamilyDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ViewConditionsBase &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: PositionFamilyDocument;
  /** Родительское семейство должностей */
  parent_position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Группа подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  /**
   * Является динамической
   * @default false
   */
  is_dynamic: XmlElem<boolean>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профили компетенций */
  competence_profiles: XmlMultiElem<PositionFamilyDocumentCompetenceProfile | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionFamilyDocumentKpiProfile | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  dynamic_select_position_commons(clearList: unknown): unknown;
  /** @temp */
  view: XmlElem<PositionFamilyDocumentView | null>;
};

type PositionFamilyDocument = XmlDocument & {
  TopElem: PositionFamilyDocumentTopElem;
  position_family: PositionFamilyDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
