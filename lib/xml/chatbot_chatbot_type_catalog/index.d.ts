type ChatbotChatbotTypeCatalogDocumentTopElem = XmlTopElem & {
  /** ID */
  id: XmlElem<number | null>;
  /** Код */
  chatbot_code: XmlElem<string | null>;
  bot_id: XmlElem<string | null>;
  chatbot_id: XmlElem<number | null, ChatbotCatalogDocumentTopElem>;
  chatbot_type_id: XmlElem<number | null, ChatbotTypeCatalogDocumentTopElem>;
  /** Webhook */
  webhook_url: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
