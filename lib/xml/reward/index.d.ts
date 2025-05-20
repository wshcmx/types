interface RewardDocumentCollaboratorIdSd {
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

interface RewardDocumentCollaboratorId {
  sd: XmlElem<RewardDocumentCollaboratorIdSd | null>;
}

type RewardDocumentTopElem = XmlTopElem & {
  Doc: RewardDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  reward_type_id: XmlElem<number | null, RewardTypeCatalogDocumentTopElem>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string>;
  /** Сотрудник */
  collaborator_id: XmlElem<RewardDocumentCollaboratorId | null, CollaboratorCatalogDocumentTopElem>;
  /** Периоды */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Краткое описание */
  short_description: XmlElem<string | null>;
  initiator_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type RewardDocument = XmlDocument & {
  TopElem: RewardDocumentTopElem;
  reward: RewardDocumentTopElem;
};
