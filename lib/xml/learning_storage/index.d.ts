type LearningStorageDocumentTopElem = XmlTopElem & {
  Doc: LearningStorageDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** @default false */
  std_auth: XmlElem<boolean>;
  auth_eval: XmlElem<string | null>;
  /** @default login */
  auth_person_type: XmlElem<string>;
  auth_person_eval: XmlElem<string | null>;
  external_url: XmlElem<string | null>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  /** @default true */
  create_activity: XmlElem<boolean>;
  /** @default false */
  use_extended_analytics: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningStorageDocument = XmlDocument & {
  TopElem: LearningStorageDocumentTopElem;
  learning_storage: LearningStorageDocumentTopElem;
  DocDesc(): string;
};
