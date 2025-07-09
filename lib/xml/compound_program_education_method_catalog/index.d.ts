type CompoundProgramEducationMethodCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Корневой раздел */
  program_id: XmlElem<number | null>;
  /** Корневой раздел */
  parent_progpam_id: XmlElem<number | null>;
  /** Должность */
  position: XmlElem<number | null>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Название модульной программы */
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
   * Тип оплаты
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
   * Тип
   * @default course
   */
  object_type: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код объекта */
  object_code: XmlElem<string | null>;
  /**
   * Признак открытой учебной программы
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Длительность в днях */
  duration_days: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
