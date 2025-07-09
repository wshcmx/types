type EducationProgramEducationMethodCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Название учебной программы */
  education_method_name: XmlElem<string | null>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /**
   * Способ оплаты
   * @default person
   */
  cost_type: XmlElem<string | null, typeof common.cost_types>;
  /** Длительность в часах */
  duration: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /**
   * Тип учебной программы
   * @default org
   */
  type: XmlElem<string, typeof common.education_method_types>;
  /**
   * Признак открытой учебной программы
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Длительность в днях */
  duration_days: XmlElem<number | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
