type PollResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Процедура опроса */
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО пользователя */
  person_fullname: XmlElem<string | null>;
  /** Организация пользователя */
  person_org_name: XmlElem<string | null>;
  /** Вопросы */
  question_id: XmlMultiElemObject<number | null>;
  /** Заполнена */
  is_done: XmlElem<boolean | null>;
  /** Статус */
  status: XmlElem<number | null>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Значение */
  main_value: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /**
   * Использовать прокторинг
   * @default false
   */
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
