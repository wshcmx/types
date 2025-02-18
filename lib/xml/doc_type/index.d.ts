interface DocTypeDocumentSheet {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface DocTypeDocumentFieldEntry {
  value: XmlElem<string | null>;
}

interface DocTypeDocumentFieldSubFieldEntry {
  value: XmlElem<string | null>;
}

interface DocTypeDocumentFieldSubField {
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип поля
   * @default string
   */
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  catalog: XmlElem<string | null>;
  set_value_action: XmlElem<string | null>;
  /** @default false */
  flag_extended: XmlElem<boolean>;
  /** @default false */
  is_readonly: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
  entries: XmlMultiElem<DocTypeDocumentFieldSubFieldEntry | null>;
}

interface DocTypeDocumentFieldControlElement {
  type: XmlElem<string | null>;
  title: XmlElem<string | null>;
  action: XmlElem<string | null>;
}

interface DocTypeDocumentField {
  /** Название */
  name: XmlElem<string | null>;
  /**
   * Тип поля
   * @default string
   */
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  catalog: XmlElem<string | null>;
  set_value_action: XmlElem<string | null>;
  entries: XmlMultiElem<DocTypeDocumentFieldEntry | null>;
  /** Страница */
  sheet_id: XmlElem<string | null>;
  /** @default false */
  flag_extended: XmlElem<boolean>;
  /** @default false */
  indexed: XmlElem<boolean>;
  /**
   * Поле в каталоге
   * @default false
   */
  in_catalog: XmlElem<boolean>;
  /** @default 0 */
  hide_level: XmlElem<number | null>;
  /** @default false */
  is_multiple: XmlElem<boolean>;
  /** @default false */
  is_readonly: XmlElem<boolean>;
  /** @default false */
  translatable: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
  sub_fields: XmlMultiElem<DocTypeDocumentFieldSubField | null>;
  control_elements: XmlMultiElem<DocTypeDocumentFieldControlElement | null>;
}

interface DocTypeDocumentView extends DescBase {
  /** @default false */
  is_edit_mode: XmlElem<boolean>;
  /**
   * @temp
   * @default 0
   */
  dummy_buff: XmlElem<number>;
}

type DocTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: DocTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /**
   * Имя объекта
   * @default cc_
   */
  object_name: XmlElem<string>;
  /** Страницы */
  sheets: XmlMultiElem<DocTypeDocumentSheet | null>;
  /** Поля */
  fields: XmlMultiElem<DocTypeDocumentField | null>;
  /** @default false */
  is_hier: XmlElem<boolean>;
  /**
   * Форма требует перезагрузки сервера
   * @default false
   */
  is_crave_for_reboot: XmlElem<boolean>;
  /** Web шаблон */
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** UI шаблон */
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  disp_name: XmlElem<string | null>;
  before_init_action: XmlElem<string | null>;
  before_save_action: XmlElem<string | null>;
  /** Журнал */
  log: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @temp */
  view: XmlElem<DocTypeDocumentView | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type DocTypeDocument = XmlDocument & {
  TopElem: DocTypeDocumentTopElem;
  doc_type: DocTypeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
