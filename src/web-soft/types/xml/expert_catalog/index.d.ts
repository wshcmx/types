type ExpertCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  /** ID */
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /**
   * Тип
   * @default invitee
   */
  type: XmlElem<string, typeof common.lector_types>;
  /** Эксперт */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО эксперта */
  person_fullname: XmlElem<string | null>;
  /** Замещающий эксперт */
  sub_expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  /** Рейтинг эксперта */
  rating: XmlElem<number | null>;
  /** Нормативный срок ответа на вопрос */
  answer_expire_time: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
