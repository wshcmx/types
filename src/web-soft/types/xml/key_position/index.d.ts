interface KeyPositionDocumentRiskLevel {
  risk_level_id: XmlElem<number | null, RiskLevelCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionName {
  id: XmlElem<string | null>;
  /** Название должности */
  name: XmlElem<string | null>;
}

type KeyPositionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
ViewConditionsBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KeyPositionDocument;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Уровень риска */
  risk_perspective_id: XmlElem<number | null, RiskPerspectiveCatalogDocumentTopElem>;
  /** Угроза ключевой должности */
  key_position_threat_id: XmlElem<number | null, KeyPositionThreatCatalogDocumentTopElem>;
  /** Тип кадрового резерва */
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default plan
   */
  status: XmlElem<string, typeof common.key_position_status_types>;
  /**
   * Доступна для преемников с любой должности
   * @default true
   */
  is_open: XmlElem<boolean>;
  /**
   * Тип
   * @default position
   */
  position_type: XmlElem<string>;
  risk_levels: XmlMultiElem<KeyPositionDocumentRiskLevel | null>;
  position_commons: XmlMultiElem<KeyPositionDocumentPositionCommon | null>;
  /** Названия должностей */
  position_names: XmlMultiElem<KeyPositionDocumentPositionName | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  EvalThreat(arrRiskLevels: unknown, fldRiskPerspective: unknown, keyPositionId: number): unknown;
};

type KeyPositionDocument = XmlDocument & {
  TopElem: KeyPositionDocumentTopElem;
  key_position: KeyPositionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
