interface ConversationDocumentParticipant extends ObjectTypeBase {
  id: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.conversation_participant_states>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface ConversationDocumentProhibition {
  id: XmlElem<string | null>;
  /**
   * Тип
   * @default prohibition_to_write
   */
  type_id: XmlElem<string | null, typeof common.prohibition_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ConversationDocumentRelatedChat {
  /** Чат с чатботом */
  related_chat_id: XmlElem<number | null, ChatbotChatCatalogDocumentTopElem>;
}

interface ConversationDocumentKeyboardsBlockKeyboard {
  id: XmlElem<string | null>;
  text: XmlElem<string | null>;
  /** @default false */
  request_contact: XmlElem<boolean | null>;
  /** @default false */
  request_location: XmlElem<boolean | null>;
  /** @default false */
  next_row: XmlElem<boolean | null>;
}

interface ConversationDocumentKeyboardsBlock {
  keyboards: XmlMultiElem<ConversationDocumentKeyboardsBlockKeyboard | null>;
}

interface ConversationDocumentViewCollaborator {
  id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ConversationDocumentView {
  collaborators: XmlMultiElem<ConversationDocumentViewCollaborator | null>;
  /** @temp */
  filter: XmlElem<AuFtFilter | null>;
}

type ConversationDocumentTopElem = XmlTopElem &
PersonFillingBase &
FuncManagersBase &
CustomElemsBase & {
  Doc: ConversationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Создатель разговора */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип разговора */
  conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  /**
   * Формат разговора
   * @default chat
   */
  format_id: XmlElem<string | null, typeof common.conversation_formats>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.account_status_types>;
  /** Настраиваемый статус */
  custom_state_id: XmlElem<string | null>;
  /**
   * Публичный разговор
   * @default false
   */
  is_public: XmlElem<boolean>;
  /**
   * Писать по умолчанию запрещено
   * @default false
   */
  prohibit_write: XmlElem<boolean>;
  /**
   * Разрешить звонки
   * @default false
   */
  can_call: XmlElem<boolean>;
  /**
   * Разрешить изменение состава участников
   * @default true
   */
  can_change_participant: XmlElem<boolean>;
  /**
   * Разрешить отображение дополнительной информации для всех
   * @default false
   */
  can_show_additional_info: XmlElem<boolean>;
  /** @default false */
  created: XmlElem<boolean>;
  /** Приоритет позиции в списке */
  position_priority: XmlElem<number | null>;
  /** Дополнительный стиль в списке */
  list_css: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Участники разговора */
  participants: XmlMultiElem<ConversationDocumentParticipant | null>;
  /** Запреты в разговоре */
  prohibitions: XmlMultiElem<ConversationDocumentProhibition | null>;
  /** Связанные чаты */
  related_chats: XmlMultiElem<ConversationDocumentRelatedChat | null>;
  keyboards_block: XmlElem<ConversationDocumentKeyboardsBlock | null>;
  /** @temp */
  view: XmlElem<ConversationDocumentView | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Все участники */
  participants_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
};

type ConversationDocument = XmlDocument & {
  TopElem: ConversationDocumentTopElem;
  conversation: ConversationDocumentTopElem;
  OnBeforeSave(): void;
};
