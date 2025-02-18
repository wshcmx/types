interface BonusItemDocumentBonusesBonus {
  pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  value: XmlElem<number | null>;
  boss_treat: XmlElem<number | null>;
  overall: XmlElem<number | null>;
}

interface BonusItemDocumentBonuses {
  bonus: XmlMultiElemObject<BonusItemDocumentBonusesBonus | null>;
}

interface BonusItemDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @default false */
  is_edit_mode: XmlElem<boolean>;
}

type BonusItemDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: BonusItemDocument;
  /** Название */
  name(): string;
  /** Процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
  bonuses: XmlElem<BonusItemDocumentBonuses | null>;
  /** Результат */
  result: XmlElem<number | null>;
  calc_result(): unknown;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<BonusItemDocumentView | null>;
};

type BonusItemDocument = XmlDocument & {
  TopElem: BonusItemDocumentTopElem;
  bonus_item: BonusItemDocumentTopElem;
  DocDesc(): string;
};
