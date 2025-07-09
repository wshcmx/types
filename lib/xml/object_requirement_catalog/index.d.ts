type ObjectRequirementCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип требования */
  requirement_type: XmlElem<string | null>;
  /** Требуемый объект согласования */
  requirement_object_id: XmlElem<number | null>;
  /** Тип требуемого объекта согласования */
  requirement_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Дополнительный объект согласования */
  sec_requirement_object_id: XmlElem<number | null>;
  /** Тип дополнительного объекта согласования */
  sec_requirement_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Обязательный
   * @default false
   */
  obligatory: XmlElem<boolean>;
  /** Требуемое значение */
  requirement_value: XmlElem<string | null>;
  /** Дополнительный параметр */
  additional_param: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
