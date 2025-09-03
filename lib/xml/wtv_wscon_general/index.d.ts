interface BmMessageRecipient {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /**
   * Статус
   * @default not_read
   */
  state_id: XmlElem<string | null, typeof common.message_states>;
}

interface BmMessageDispRole {
  id: XmlElem<string | null>;
}

interface BmMessageReply {
  message_id: XmlElem<string | null>;
  /** Блок отвечаемого сообщения */
  block_message_id: XmlElem<number | null, BlockMessageCatalogDocumentTopElem>;
}

interface BmMessageForward {
  message_id: XmlElem<string | null>;
  /** Блок пересылаемого сообщения */
  block_message_id: XmlElem<number | null, BlockMessageCatalogDocumentTopElem>;
  /** Разговор пересылаемого сообщения */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
}

interface BmMessageViewReply {
  message_id: XmlElem<string | null>;
  sender_id: XmlElem<number | null>;
  sender_type: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

interface BmMessageViewForward {
  message_id: XmlElem<string | null>;
  block_message_id: XmlElem<number | null, BlockMessageCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  sender_id: XmlElem<number | null>;
  sender_type: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

interface BmMessageView {
  /**
   * @temp
   * @default catalogs
   */
  tab_select: XmlElem<string>;
  /** Данные по отвечаемому сообщению */
  reply: XmlElem<BmMessageViewReply | null>;
  /** Данные по пересылаемому сообщению */
  forward: XmlElem<BmMessageViewForward | null>;
}

interface BmMessage extends ObjectTypeBase, FileListBase, CatalogListBase {
  id: XmlElem<string | null>;
  /** Текст сообщения */
  text: XmlElem<string | null>;
  /**
   * Есть новая реакция
   * @default false
   */
  new_reaction: XmlElem<boolean>;
  /**
   * Сообщение прочитано
   * @default true
   */
  read: XmlElem<boolean>;
  /**
   * Тип
   * @default message
   */
  type_id: XmlElem<string | null, typeof common.message_types>;
  /** @default undefined */
  check_link: XmlElem<string | null>;
  /**
   * Статус
   * @default active
   */
  state_id: XmlElem<string | null, typeof common.conversation_message_states>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата редактирования */
  edit_date: XmlElem<Date | null>;
  /** Адресаты */
  recipients: XmlMultiElem<BmMessageRecipient | null>;
  disp_roles: XmlMultiElem<BmMessageDispRole | null>;
  /** Данные по отвечаемому сообщению */
  reply: XmlElem<BmMessageReply | null>;
  /** Данные по пересылаемому сообщению */
  forward: XmlElem<BmMessageForward | null>;
  /**
   * Настройки сообщения неактивны
   * @default false
   */
  disabled_data: XmlElem<boolean>;
  /** Настройки сообщения */
  data: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<BmMessageView | null>;
}

interface WsconKnowledgePartsFieldsBaseKnowledgePart {
  /** Значения карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string | null>;
  knowledge_part_level_id: XmlElem<number | null, KnowledgePartLevelCatalogDocumentTopElem>;
  /** Родительское значение */
  full_path: XmlElem<string | null>;
  /** Текущий уровень */
  current_level_id: XmlElem<string | null>;
  /** Индекс текущего уровня */
  current_level_index: XmlElem<number | null>;
  /** Текущий уровень */
  current_level_name: XmlElem<string | null>;
  /** Целевой уровень */
  target_level_id: XmlElem<string | null>;
  /** Индекс целевого уровня */
  target_level_index: XmlElem<number | null>;
  /** Целевой уровень */
  target_level_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Требует подтверждения
   * @default false
   */
  require_acknowledgement: XmlElem<boolean>;
}

interface WsconKnowledgePartsFieldsBase {
  knowledge_parts: XmlMultiElem<WsconKnowledgePartsFieldsBaseKnowledgePart | null>;
}

interface WsconKnowledgePartsBaseTag {
  tag_id: XmlElem<number | null, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /**
   * Требует подтверждения
   * @default false
   */
  require_acknowledgement: XmlElem<boolean>;
}

interface WsconKnowledgePartsBaseExpert {
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
}

interface WsconKnowledgePartsBase extends WsconKnowledgePartsFieldsBase {
  /** Тэги */
  tags: XmlMultiElem<WsconKnowledgePartsBaseTag | null>;
  experts: XmlMultiElem<WsconKnowledgePartsBaseExpert | null>;
  acquaint_time: XmlElem<number | null>;
  previous_version_object_id: XmlElem<number | null>;
  /**
   * Статус
   * @default active
   */
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  /** Дата начала действия */
  kp_start_date: XmlElem<Date | null>;
  /** Дата окончания действия */
  kp_end_date: XmlElem<Date | null>;
  /**
   * @temp
   * Классификатор
   */
  view_knowledge_classifier_id: XmlElem<number | null>;
}
