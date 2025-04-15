interface ExternalSystemDocumentKnowledgeUrlPair {
  code: XmlElem<string | null>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
}

interface ExternalSystemDocumentSettings {
  float_button_title: XmlElem<string | null>;
  list_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  list_web_template_params: XmlElem<WebVariablesBase | null>;
  bubble_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  bubble_web_template_params: XmlElem<WebVariablesBase | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_web_template_params: XmlElem<WebVariablesBase | null>;
}

interface ExternalSystemDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
}

type ExternalSystemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExternalSystemDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  knowledge_url_pairs: XmlMultiElem<ExternalSystemDocumentKnowledgeUrlPair | null>;
  /** Анонимный пользователь */
  anonymous_user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  settings: XmlElem<ExternalSystemDocumentSettings | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<ExternalSystemDocumentView | null>;
};

type ExternalSystemDocument = XmlDocument & {
  TopElem: ExternalSystemDocumentTopElem;
  external_system: ExternalSystemDocumentTopElem;
  DocDesc(): string;
};
