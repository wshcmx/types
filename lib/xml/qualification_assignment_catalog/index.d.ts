type QualificationAssignmentCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Дата присвоения */
  assignment_date: XmlElem<Date | null>;
  /** Дата истечения */
  expiration_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default assigned
   */
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  /** Квалификация */
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Отправитель */
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Основание */
  reason: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Является наградой */
  is_reward: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
