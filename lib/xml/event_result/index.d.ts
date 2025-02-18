type EventResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
ExpenseDistributionBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: EventResultDocument;
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
   * @default undefined
   */
  status_id: XmlElem<string | null, typeof common.event_result_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип результата мероприятия */
  event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /**
   * Присутствие
   * @default true
   */
  is_assist: XmlElem<boolean>;
  /**
   * Подтвердил участие
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
  last_sending_date: XmlElem<Date | null>;
  last_webinar_activity_date: XmlElem<Date | null>;
  /** @default 0 */
  webinar_activity_time: XmlElem<number | null>;
  /** @default false */
  is_open: XmlElem<boolean>;
  /** Баллы */
  score: XmlElem<number | null>;
  /** Комментарий тьютера */
  tutor_comment: XmlElem<string | null>;
  /** Комментарий сотрудника */
  collaborator_comment: XmlElem<string | null>;
  /**
   * Без оплаты
   * @default false
   */
  not_pay: XmlElem<boolean>;
  /** Центр затрат участника по умолчанию */
  default_cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Ресурс */
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  /** Сертификат */
  certificate_id: XmlElem<number | null, CertificateCatalogDocumentTopElem>;
  /**
   * Используется гостевой вход
   * @default false
   */
  guest: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type EventResultDocument = XmlDocument & {
  TopElem: EventResultDocumentTopElem;
  event_result: EventResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
