interface CustomAdminTemplateDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @default true */
  form_name_correct: XmlElem<boolean | null>;
}

type CustomAdminTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase & {
  Doc: CustomAdminTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /** Название формы */
  form_name: XmlElem<string | null>;
  /** Код */
  xms: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<CustomAdminTemplateDocumentView | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  /**
   * Измененный
   * @default false
   */
  changed: XmlElem<boolean>;
  /**
   * Является системным
   * @default false
   */
  is_std: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CustomAdminTemplateDocument = XmlDocument & {
  TopElem: CustomAdminTemplateDocumentTopElem;
  custom_admin_template: CustomAdminTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
