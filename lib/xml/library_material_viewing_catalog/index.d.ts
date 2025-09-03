type LibraryMaterialViewingCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Материал библиотеки */
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  /** Название материала */
  material_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.viewing_states>;
  /**
   * Продолжительность просмотра
   * @default 0
   */
  duration: XmlElem<number | null>;
  /** Начало просмотра */
  start_viewing_date: XmlElem<Date | null>;
  /** Время последнего просмотра */
  last_viewing_date: XmlElem<Date | null>;
  /** Время полного просмотра */
  finish_viewing_date: XmlElem<Date | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Пользователь */
  creation_user_id: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Пользователь */
  modification_user_id: XmlElem<number | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
