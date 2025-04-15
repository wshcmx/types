interface CustomWebTemplateGroupDocumentTemplate extends WebVariablesBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  parent_template_id: XmlElem<string | null>;
  /** @default 0 */
  position: XmlElem<number | null>;
  /**
   * @temp
   * @default 0
   */
  hier_level: XmlElem<number | null>;
  /**
   * @temp
   * @default true
   */
  hier_expanded: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface CustomWebTemplateGroupDocumentView {
  /** @temp */
  sel_template_id: XmlElem<string | null>;
}

type CustomWebTemplateGroupDocumentTopElem = XmlTopElem & {
  Doc: CustomWebTemplateGroupDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  templates: XmlMultiElem<CustomWebTemplateGroupDocumentTemplate | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<CustomWebTemplateGroupDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CustomWebTemplateGroupDocument = XmlDocument & {
  TopElem: CustomWebTemplateGroupDocumentTopElem;
  custom_web_template_group: CustomWebTemplateGroupDocumentTopElem;
  DocDesc(): string;
};
