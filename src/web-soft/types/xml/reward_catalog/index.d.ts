interface RewardsRewardsCollaboratorIdSd {
  /** ФИО сотрудника */
  fullname: XmlElem<string | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  /** Должность */
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Название подразделения */
  position_parent_name: XmlElem<string | null>;
  /** Подразделение */
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Название организации */
  org_name: XmlElem<string | null>;
  /** Является уволенным */
  is_dismiss: XmlElem<boolean | null>;
}

interface RewardsCollaboratorId {
  sd: XmlElem<RewardsRewardsCollaboratorIdSd | null>;
}

interface RewardsDocumentBudgetPeriod {
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Название */
  budget_period_name: XmlElem<string | null>;
  /** Численность */
  quantity: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type RewardCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** c_reward_type */
  reward_type_id: XmlElem<number | null, RewardTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string>;
  sd: XmlElem<RewardsRewardsCollaboratorIdSd | null>;
  /** Сотрудник */
  collaborator_id: XmlElem<RewardsCollaboratorId | null>;
  /** Периоды */
  budget_periods: XmlMultiElem<RewardsDocumentBudgetPeriod | null>;
  /** Краткое описание */
  short_description: XmlElem<string | null>;
  /** vrb_reward_initiator */
  creation_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** c_reward_source */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
