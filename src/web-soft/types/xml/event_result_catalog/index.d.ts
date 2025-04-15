type EventResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Название мероприятия */
  event_name: XmlElem<string | null>;
  /** Дата начала мероприятия */
  event_start_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default plan
   */
  status_id: XmlElem<string | null, typeof common.event_result_status_types>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО пользователя */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Организация */
  person_org_name: XmlElem<string | null>;
  /** Подразделение */
  person_subdivision_name: XmlElem<string | null>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  /** Тип результата мероприятия */
  event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /**
   * Признак присутствия
   * @default false
   */
  is_assist: XmlElem<boolean>;
  /**
   * Признак подтверждения участия
   * @default false
   */
  is_confirm: XmlElem<boolean>;
  /**
   * Доступ запрещен
   * @default false
   */
  is_banned: XmlElem<boolean>;
  /**
   * Отказался от участия
   * @default false
   */
  not_participate: XmlElem<boolean>;
  /**
   * Является открытым решением кейса
   * @default false
   */
  is_open: XmlElem<boolean>;
  /** Баллы */
  score: XmlElem<number | null>;
  /** Последняя отправка */
  last_sending_date: XmlElem<Date | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Кост-центр */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /**
   * Признак: без оплаты
   * @default false
   */
  not_pay: XmlElem<boolean>;
  /**
   * Используется гостевой вход
   * @default false
   */
  guest: XmlElem<boolean>;
  /** Сумма затрат */
  expense_sum: XmlElem<number | null>;
  /** Ресурс */
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  /** Сертификат */
  certificate_id: XmlElem<number | null, CertificateCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
