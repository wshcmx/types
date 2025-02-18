interface OrderTypeDocumentSigningPersonIdSd {
  fullname: XmlElem<string | null>;
}

interface OrderTypeDocumentSigningPersonId {
  sd: XmlElem<OrderTypeDocumentSigningPersonIdSd | null> & XmlElem<number>;
}

interface OrderTypeDocumentResponsiblePersonIdSd {
  fullname: XmlElem<string | null>;
}

interface OrderTypeDocumentResponsiblePersonId {
  sd: XmlElem<OrderTypeDocumentResponsiblePersonIdSd | null> & XmlElem<number>;
}

interface OrderTypeDocumentPerformerPersonIdSd {
  fullname: XmlElem<string | null>;
}

interface OrderTypeDocumentPerformerPersonId {
  sd: XmlElem<OrderTypeDocumentPerformerPersonIdSd | null> & XmlElem<number>;
}

interface OrderTypeDocumentView {
  /** @temp */
  name_start: XmlElem<string | null>;
}

type OrderTypeDocumentTopElem = XmlTopElem & {
  Doc: OrderTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Текущий номер */
  number: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /** Суффикс */
  suffix: XmlElem<string | null>;
  /**
   * Использовать во вновь формируемых приказах
   * @default false
   */
  default_flag: XmlElem<boolean | null>;
  /** Подписывающий приказ */
  signing_person_id: XmlElem<OrderTypeDocumentSigningPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Ответственный за платеж */
  responsible_person_id: XmlElem<OrderTypeDocumentResponsiblePersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Исполнитель */
  performer_person_id: XmlElem<OrderTypeDocumentPerformerPersonId | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<OrderTypeDocumentView | null>;
};

type OrderTypeDocument = XmlDocument & {
  TopElem: OrderTypeDocumentTopElem;
  order_type: OrderTypeDocumentTopElem;
  DocDesc(): string;
};
