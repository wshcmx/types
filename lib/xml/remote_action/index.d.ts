interface RemoteActionDocumentView {
  /** @temp */
  referer_url: XmlElem<string | null>;
}

type RemoteActionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteActionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /**
   * Тип
   * @default eval
   */
  type: XmlElem<string, typeof common.eval_types>;
  /** Комментарий */
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  link_name: XmlElem<string | null>;
  /**
   * Использовать в видах
   * @default true
   */
  show_in_list: XmlElem<boolean>;
  /**
   * Использовать в карточке объекта
   * @default true
   */
  show_in_form: XmlElem<boolean>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  /** Код */
  script: XmlElem<string | null>;
  /**
   * Выводить типовые диалоги при выполнении действия
   * @default false
   */
  default_disp_evaluate: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
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
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** @temp */
  view: XmlElem<RemoteActionDocumentView | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  evaluate(resultType: string, request: Request, argVars: Object, configuration: string): {
    error: 1 | 0;
    messageText: string;
    result: unknown;
    type: string;
  };
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type RemoteActionDocument = XmlDocument & {
  TopElem: RemoteActionDocumentTopElem;
  remote_action: RemoteActionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
