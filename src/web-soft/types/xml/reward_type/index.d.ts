interface RewardDocumentBudgetPeriod {
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  /** Название */
  budget_period_name: XmlElem<string>;
  /** Численность */
  quantity: XmlElem<number>;
  /** Комментарий */
  comment: XmlElem<string>;
}

type RewardDocumentTypeTopElem = XmlTopElem & {
  Doc: RewardDocument;
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string>;
  /** Дата начала */
	start_date: XmlElem<Date>;
  /** Периоды */
  budget_periods: XmlMultiElem<RewardDocumentBudgetPeriod | null>;
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

type RewardTypeDocument = XmlDocument & {
  TopElem: RewardDocumentTypeTopElem;
  reward: RewardDocumentTypeTopElem;
};
