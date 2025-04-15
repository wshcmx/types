type ObjectRequirementCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  requirement_type: XmlElem<string | null>;
  requirement_object_id: XmlElem<number | null>;
  requirement_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_requirement_object_id: XmlElem<number | null>;
  sec_requirement_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
  requirement_value: XmlElem<string | null>;
  additional_param: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
