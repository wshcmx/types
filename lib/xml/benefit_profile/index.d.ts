interface BenefitProfileDocumentPositionCommon {
  id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentGrade {
  id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
}

interface BenefitProfileDocumentBenefit {
  id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
}

type BenefitProfileDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitProfileDocument;
  /**
   * Статус
   * @default plan
   */
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  position_commons: XmlMultiElem<BenefitProfileDocumentPositionCommon | null>;
  grades: XmlMultiElem<BenefitProfileDocumentGrade | null>;
  /** Типы привилегий */
  benefits: XmlMultiElem<BenefitProfileDocumentBenefit | null>;
  /** Семейство должностей */
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Группы подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  /** Регион сотрудника */
  person_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Регион подразделения сотрудника */
  subdivision_region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Расположение сотрудника */
  person_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Расположение подразделения сотрудника */
  subdivision_place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Форма работы */
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  /** Тип условий труда */
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  /** Стаж */
  work_experience: XmlElem<number | null>;
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

type BenefitProfileDocument = XmlDocument & {
  TopElem: BenefitProfileDocumentTopElem;
  benefit_profile: BenefitProfileDocumentTopElem;
  DocDesc(): string;
};
