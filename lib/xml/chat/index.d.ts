interface ChatDocumentCollaborator {
  /** Пользователь */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Логин */
  login: XmlElem<string | null>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position_name: XmlElem<string | null>;
  /** Подразделение сотрудника */
  person_subdivision_name: XmlElem<string | null>;
  /** Организация сотрудника */
  person_org_name: XmlElem<string | null>;
  /** @default false */
  confirmed: XmlElem<boolean>;
  /** @default false */
  prohibited: XmlElem<boolean>;
  last_view_date: XmlElem<Date | null>;
}

interface ChatDocumentUser {
  /** Пользователь */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Логин */
  login: XmlElem<string | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Подразделение */
  subdivision_name: XmlElem<string | null>;
  /** Организация */
  org_name: XmlElem<string | null>;
  email: XmlElem<string | null>;
}

interface ChatDocumentMessage {
  /** @default com.websoft.vclass.vo.ChatMessage */
  class: XmlElem<string | null>;
  id: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Логин */
  login: XmlElem<string | null>;
  /** @default false */
  sender_is_manager: XmlElem<boolean | null>;
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** @default false */
  is_private: XmlElem<boolean | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  recipient_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recipient_fullname: XmlElem<string | null>;
  recipient_login: XmlElem<string | null>;
  time: XmlElem<string | null>;
  /** Текст сообщения */
  text: XmlElem<string | null>;
  /** @default true */
  show: XmlElem<boolean | null>;
  /** @default false */
  marked: XmlElem<boolean | null>;
  /** @default false */
  important: XmlElem<boolean | null>;
  /** @default false */
  answered: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
}

type ChatDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ChatDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Пользователи */
  collaborators: XmlMultiElem<ChatDocumentCollaborator | null>;
  /** Пользователи */
  users: XmlMultiElem<ChatDocumentUser | null>;
  /** Сообщения */
  messages: XmlMultiElem<ChatDocumentMessage | null>;
  /**
   * Персональный чат
   * @default false
   */
  is_personal: XmlElem<boolean>;
  /**
   * Многопользовательский чат
   * @default false
   */
  is_multiplayer: XmlElem<boolean>;
  /**
   * Максимальное количество сообщений
   * @default 300
   */
  max_messages: XmlElem<number>;
  /**
   * При открытии показывать сообщений
   * @default 10
   */
  view_messages: XmlElem<number>;
  /**
   * Время обновления
   * @default 5
   */
  reload_timeout: XmlElem<number>;
  /** Документ */
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Разговор */
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** @default login */
  name_source: XmlElem<string>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ChatDocument = XmlDocument & {
  TopElem: ChatDocumentTopElem;
  chat: ChatDocumentTopElem;
  DocDesc(): string;
};
