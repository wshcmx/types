interface PersonalAssistantDocumentChatbotsBlockChatbot {
  /** Чат-бот */
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
}

interface PersonalAssistantDocumentChatbotsBlock {
  /** Чат-боты */
  chatbots: XmlMultiElem<PersonalAssistantDocumentChatbotsBlockChatbot | null>;
}

type PersonalAssistantDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: PersonalAssistantDocument;
  /**
   * Активное уведомление
   * @default true
   */
  is_enabled: XmlElem<boolean>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Пол */
  sex: XmlElem<string | null>;
  chatbots_block: XmlElem<PersonalAssistantDocumentChatbotsBlock | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<unknown | null>;
};

type PersonalAssistantDocument = XmlDocument & {
  TopElem: PersonalAssistantDocumentTopElem;
  personal_assistant: PersonalAssistantDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
