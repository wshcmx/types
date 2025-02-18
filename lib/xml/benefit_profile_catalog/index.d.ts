type BenefitProfileCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  /** Статус */
  status: XmlElem<string | null, typeof common.benefit_statuses>;
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
  /** ID типовых должностей */
  position_commons_ids: XmlMultiElemObject<number | null, PositionCommonCatalogDocumentTopElem>;
  /** ID грейдов */
  grades_ids: XmlMultiElemObject<number | null, GradeCatalogDocumentTopElem>;
  /** ID типов привилегий */
  benefits_ids: XmlMultiElemObject<number | null, BenefitCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
