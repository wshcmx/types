interface CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate {
  include_custom_chatbot_template_id: XmlElem<number | null, CustomChatbotTemplateCatalogDocumentTopElem>;
}

interface CustomChatbotTemplateDocumentView extends DescBase {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type CustomChatbotTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
MsParametersBase & {
  Doc: CustomChatbotTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  eval_str: XmlElem<string | null>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  /** @default custom_chatbot_template */
  out_type: XmlElem<string, typeof common.chatbot_out_types>;
  include_custom_chatbot_templates: XmlMultiElem<CustomChatbotTemplateDocumentIncludeCustomChatbotTemplate | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
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
  view: XmlElem<CustomChatbotTemplateDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CustomChatbotTemplateDocument = XmlDocument & {
  TopElem: CustomChatbotTemplateDocumentTopElem;
  custom_chatbot_template: CustomChatbotTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
