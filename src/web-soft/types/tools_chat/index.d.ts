declare namespace tools_chat {
  function write_message(textMessage: string, objectId: number, objectTopElem: unknown, senderId: number, senderTopElem: unknown, arrFiles: unknown, arrCatalogs: unknown, messageId: number, messageData: unknown, messageType: string, arrMessageRecipients: unknown): unknown;
  function get_recipients(objectId: number, objectTopElem: unknown): unknown;
  function set_status_participant_in_conversation(conversationId: number, aParticipantStates: unknown, conversationTopElem: unknown): unknown;
  function change_participants_conversation(conversationId: number, docConversation: unknown, action: string, participantId: number, arrParticipants: unknown, chatbotId: number, conversationTypeId: number, docParticipantObject: unknown): unknown;
  function get_data_conversation(conversationId: number, personId: number, conversationTopElem: unknown, feConversation: unknown): unknown;
  function get_conversations(personId: number, status: string, queryQual: string, lastDate: Date, selectOnlyNewMessage: boolean, session: Session, currentConversationId: number, objectTypes: string, showPublic: boolean, updateState: boolean): unknown;
  function get_conversation_messages(conversationId: number, personId: number, session: Session, conversationTopElem: unknown, personTopElem: unknown, pageNum: number, pageSize: number, checkUnreadMessage: boolean, xarrBlockMessages: unknown, lastMessageDate: Date, selectOnlyUnreadMessage: boolean): unknown;
  function get_operations_conversation(conversationId: number, personId: number, conversationTopElem: unknown, personTopElem: unknown, conversationTypeTopElem: unknown): unknown;
  function create_resource(fileData: unknown, personId: number, unauthorize: boolean, personTopElem: unknown): unknown;
  function alerd(text: string, debug: boolean): unknown;
  function add_message(chatId: number, message: string, senderId: number, chatTopElem: unknown, stageId: number, prevStageId: number, chatBotTopElem: unknown, answer: unknown, conversationId: number, writeMessage: boolean): unknown;
  function create_chat_chatbot(catChatBotType: unknown, message: unknown, chatBotTopElem: unknown, personId: number, conversationId: number): unknown;
  function send_to_stage(chatBotCode: string, curChatId: number, stageId: number, curChatDoc: unknown, prevStageId: number, chatBotTopElem: unknown, reWriteLastMessage: boolean, conversationId: number, request: unknown): unknown;
  function chatbot_request_processing(request: Request, requestBody: unknown, requestQueryString: unknown, requestForm: unknown, writeMessage: boolean, curUserId: number, conversationId: number): unknown;
  function get_aiml_data(customChatBotTemplateId: number, isForcibly: boolean, curChatId: number, curChat: unknown, customChatBotTemplateTopElem: unknown): unknown;
  function conversation_api(request: Request, response: unknown, isWebSocket: boolean, session: Session, action: string): unknown;
  function add_chatbot_to_conversation(conversationId: number, chatbotId: number, chatbotTypeId: number): unknown;
  function del_chatbot_from_conversation(conversationId: number, chatbotId: number): unknown;
}
