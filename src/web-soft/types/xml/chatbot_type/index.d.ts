type ChatbotTypeDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase & {
  Doc: ChatbotTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  script_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
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
  /** @temp */
  view: XmlElem<DescBase | null>;
};

type ChatbotTypeDocument = XmlDocument & {
  TopElem: ChatbotTypeDocumentTopElem;
  chatbot_type: ChatbotTypeDocumentTopElem;
  DocDesc(): string;
};
