type PersonMessageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  block_message_id: XmlElem<number, BlockMessageCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  conversation_state: XmlElem<string>;
  role: XmlElem<string>;
  message_id: XmlElem<string>;
  message_text: XmlElem<string>;
  message_date: XmlElem<Date>;
  file_count: XmlElem<number>;
  unread: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
