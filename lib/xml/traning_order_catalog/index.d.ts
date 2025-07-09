type TraningOrderCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Подписывающий приказ */
  signing_person_fullname: XmlElem<string | null>;
  /** Ответственный за платеж */
  responsible_person_fullname: XmlElem<string | null>;
  /** Исполнитель */
  performer_person_fullname: XmlElem<string | null>;
  /** Тип приказа */
  order_type_id: XmlElem<number | null, OrderTypeCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Этап оплаты */
  pay_phase_id: XmlElem<number | null, PayPhaseCatalogDocumentTopElem>;
  /** Сумма приказа */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.traning_order_states>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
