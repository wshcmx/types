interface BlockMessageDocumentMessageRecipient {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.message_states>;
}

interface BlockMessageDocumentMessageDispRole {
  id: XmlElem<string>;
}

interface BlockMessageDocumentMessageReply {
  message_id: XmlElem<string>;
  block_message_id: XmlElem<number, BlockMessageCatalogDocumentTopElem>;
}

interface BlockMessageDocumentMessageForward {
  message_id: XmlElem<string>;
  block_message_id: XmlElem<number, BlockMessageCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
}

interface BlockMessageDocumentMessage extends ObjectTypeBase, FileListBase, CatalogListBase {
  id: XmlElem<string>;
  text: XmlElem<string>;
  new_reaction: XmlElem<boolean>;
  type_id: XmlElem<string, typeof common.message_types>;
  check_link: XmlElem<string>;
  state_id: XmlElem<string, typeof common.conversation_message_states>;
  create_date: XmlElem<Date>;
  edit_date: XmlElem<Date>;
  recipients: XmlMultiElem<BlockMessageDocumentMessageRecipient>;
  disp_roles: XmlMultiElem<BlockMessageDocumentMessageDispRole>;
  reply: XmlElem<BlockMessageDocumentMessageReply>;
  forward: XmlElem<BlockMessageDocumentMessageForward>;
  disabled_data: XmlElem<boolean>;
  data: XmlElem<string>;
}

interface BlockMessageDocumentRecipient {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  conversation_state: XmlElem<string>;
}

type BlockMessageDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: BlockMessageDocument;
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  last_message_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.block_message_states>;
  all_message_read: XmlElem<boolean>;
  count_message: XmlElem<number>;
  has_link: XmlElem<boolean>;
  messages: XmlMultiElem<BlockMessageDocumentMessage>;
  recipients: XmlMultiElem<BlockMessageDocumentRecipient>;
  recipient_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  unread_recipient_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  disp_role_id: XmlMultiElemObject<string>;
};

type BlockMessageDocument = XmlDocument & {
  TopElem: BlockMessageDocumentTopElem;
  block_message: BlockMessageDocumentTopElem;
  OnBeforeSave(): void;
};
