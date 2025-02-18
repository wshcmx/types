type CareerReserveTutorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Развитие карьеры */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /** Дата внесения */
  start_date: XmlElem<Date | null>;
  /** Дата планируемой готовности */
  plan_readiness_date: XmlElem<Date | null>;
  /** Дата фактической готовности */
  finish_date: XmlElem<Date | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.career_reserve_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Наставник */
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Тип
   * @default tutor
   */
  tutor_type: XmlElem<string>;
  /**
   * Является ответственным
   * @default false
   */
  is_responsible: XmlElem<boolean>;
  /** ФИО наставника */
  tutor_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): boolean;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
