interface SubscriptionDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type SubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SubscriptionDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /**
   * Тип
   * @default document
   */
  type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  document_id: XmlElem<number | null>;
  /**
   * Следить за изменениями в дочерних элементах
   * @default true
   */
  include_subdocs: XmlElem<boolean>;
  /** Действует до */
  date_to: XmlElem<Date | null>;
  /** Дата последнего действия */
  date_last_action: XmlElem<Date | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<SubscriptionDocumentView | null>;
};

type SubscriptionDocument = XmlDocument & {
  TopElem: SubscriptionDocumentTopElem;
  subscription: SubscriptionDocumentTopElem;
  DocDesc(): string;
};
