interface ExpertDocumentFaq {
  faq_id: XmlElem<string | null>;
  /** Вопрос */
  faq_question: XmlElem<string | null>;
  /** Ответ */
  faq_answer: XmlElem<string | null>;
}

interface ExpertDocumentView extends DescBase {
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type ExpertDocumentTopElem = XmlTopElem &
PersonBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExpertDocument;
  id: XmlElem<number | null>;
  /** Название */
  name(): string;
  /** Код */
  code: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Тип
   * @default invitee
   */
  type: XmlElem<string, typeof common.lector_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Замещающий эксперт */
  sub_expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  /** Рейтинг */
  rating: XmlElem<number | null>;
  /** Нормативный срок ответа на вопрос */
  answer_expire_time: XmlElem<number | null>;
  faqs: XmlMultiElem<ExpertDocumentFaq | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<ExpertDocumentView | null>;
};

type ExpertDocument = XmlDocument & {
  TopElem: ExpertDocumentTopElem;
  expert: ExpertDocumentTopElem;
  DocDesc(): string;
};
