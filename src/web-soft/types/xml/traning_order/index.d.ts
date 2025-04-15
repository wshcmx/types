interface TraningOrderDocumentSigningPersonIdSd {
  fullname: XmlElem<string | null>;
}

interface TraningOrderDocumentSigningPersonId {
  sd: XmlElem<TraningOrderDocumentSigningPersonIdSd | null> & XmlElem<number>;
}

interface TraningOrderDocumentResponsiblePersonIdSd {
  fullname: XmlElem<string | null>;
}

interface TraningOrderDocumentResponsiblePersonId {
  sd: XmlElem<TraningOrderDocumentResponsiblePersonIdSd | null> & XmlElem<number>;
}

interface TraningOrderDocumentPerformerPersonIdSd {
  fullname: XmlElem<string | null>;
}

interface TraningOrderDocumentPerformerPersonId {
  sd: XmlElem<TraningOrderDocumentPerformerPersonIdSd | null> & XmlElem<number>;
}

interface TraningOrderDocumentView {
  /**
   * @temp
   * @default false
   */
  disp_collarorators: XmlElem<boolean | null>;
}

type TraningOrderDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TraningOrderDocument;
  /** Номер */
  number: XmlElem<string | null>;
  /** Установка для приказов по умолчанию */
  order_type_id: XmlElem<number | null, OrderTypeCatalogDocumentTopElem>;
  /** Дата приказа */
  date: XmlElem<Date | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string | null>;
  /** Этапы оплаты */
  pay_phase_id: XmlElem<number | null, PayPhaseCatalogDocumentTopElem>;
  /** Платеж */
  expense_id: XmlElem<string | null>;
  /** Сумма */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /**
   * Статус
   * @default form
   */
  status: XmlElem<string | null, typeof common.traning_order_states>;
  /** Подписывающий приказ */
  signing_person_id: XmlElem<TraningOrderDocumentSigningPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Ответственный за платеж */
  responsible_person_id: XmlElem<TraningOrderDocumentResponsiblePersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Исполнитель */
  performer_person_id: XmlElem<TraningOrderDocumentPerformerPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<TraningOrderDocumentView | null>;
};

type TraningOrderDocument = XmlDocument & {
  TopElem: TraningOrderDocumentTopElem;
  traning_order: TraningOrderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
