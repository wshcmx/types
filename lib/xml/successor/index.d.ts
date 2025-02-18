interface SuccessorDocumentKeyPositionId extends PersonFillingBase {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type SuccessorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SuccessorDocument;
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ключевая должность */
  key_position_id: XmlElem<SuccessorDocumentKeyPositionId | null, KeyPositionCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Уровень готовности */
  readiness_level_id: XmlElem<number | null, ReadinessLevelCatalogDocumentTopElem>;
  /** Потенциал развития */
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  /** Оценка эффективности */
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /**
   * Статус
   * @default active
   */
  status: XmlElem<string, typeof common.successor_status_types>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type SuccessorDocument = XmlDocument & {
  TopElem: SuccessorDocumentTopElem;
  successor: SuccessorDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
