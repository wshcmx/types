interface WebModeDocumentTemplateLink extends ViewConditionsBase {
  id: XmlElem<string | null>;
  /**
   * Тип
   * @default view
   */
  type: XmlElem<string | null>;
  /** Элемент шаблона */
  source_template_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
  /** Элемент шаблона */
  target_template_id: XmlElem<number | null, OverrideWebTemplateCatalogDocumentTopElem>;
}

interface WebModeDocumentStatisticRec extends WebVariablesBase {
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
}

interface WebModeDocumentView {
  /** @temp */
  sel_statistic_recs_id: XmlElem<string | null>;
}

type WebModeDocumentTopElem = XmlTopElem &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
WebVariablesBase & {
  Doc: WebModeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /**
   * По умолчанию для портала
   * @default false
   */
  is_default: XmlElem<boolean>;
  /**
   * По умолчанию для администратора
   * @default false
   */
  is_default_admin: XmlElem<boolean>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Шаблон разметки */
  placeholder_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Связи шаблонов */
  template_links: XmlMultiElem<WebModeDocumentTemplateLink | null>;
  /** Показатели */
  statistic_recs: XmlMultiElem<WebModeDocumentStatisticRec | null>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /**
   * Постзагрузка контента
   * @default false
   */
  postloading: XmlElem<boolean | null>;
  /** Инструкции загрузки */
  loading_instruction: XmlElem<string | null>;
  /**
   * Кеширование структуры
   * @default false
   */
  use_fcache: XmlElem<boolean | null>;
  /**
   * Доступна для поиска на портале
   * @default false
   */
  searchable_portal: XmlElem<boolean | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  use_lpapi(): boolean;
  /** @temp */
  view: XmlElem<WebModeDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type WebModeDocument = XmlDocument & {
  TopElem: WebModeDocumentTopElem;
  web_mode: WebModeDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
