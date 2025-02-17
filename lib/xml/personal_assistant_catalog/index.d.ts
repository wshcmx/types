type PersonalAssistantCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Пол */
  sex: XmlElem<string | null>;
  /** Чат-боты */
  chatbot_ids: XmlMultiElemObject<number | null, ChatbotCatalogDocumentTopElem>;
  OnBuild(): void;
};
