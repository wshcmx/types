type ChatbotChatbotTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  chatbot_code: XmlElem<string>;
  bot_id: XmlElem<string>;
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  chatbot_type_id: XmlElem<number, ChatbotTypeCatalogDocumentTopElem>;
  webhook_url: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
