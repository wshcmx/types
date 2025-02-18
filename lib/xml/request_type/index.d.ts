interface RequestTypeDocumentCreateCode {
  /** Код отработки при создании заявки */
  code: XmlElem<string | null>;
  /** Библиотека программного кода (метод onCreate) */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
}

type RequestTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase & {
  Doc: RequestTypeDocument;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Условия для отбора объекта */
  object_query_qual: XmlElem<string | null>;
  /**
   * По умолчанию заявка групповая
   * @default false
   */
  is_group: XmlElem<boolean>;
  /**
   * Заявка может быть групповой
   * @default true
   */
  is_can_be_group: XmlElem<boolean>;
  /**
   * Подающий заявку может добавить себя
   * @default true
   */
  is_can_be_add_youself: XmlElem<boolean>;
  /**
   * Не показывать поле обоснование
   * @default true
   */
  hide_portal_comment: XmlElem<boolean>;
  /**
   * Запретить отклонять заявку ее автору
   * @default false
   */
  forbid_rejection: XmlElem<boolean>;
  /**
   * Запретить автору заявки создавать копию
   * @default false
   */
  forbid_copy: XmlElem<boolean>;
  /**
   * Подавать заявку может только руководитель
   * @default false
   */
  boss_only: XmlElem<boolean>;
  /**
   * Отображать всех сотрудников при выборе группы
   * @default false
   */
  show_all: XmlElem<boolean>;
  /** Не учитывать черный список при создании и обработке */
  ignore_black_list: XmlElem<boolean | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Сообщение при подаче заявки */
  create_message: XmlElem<string | null>;
  /**
   * Использовать стандартную обработку для данного типа объекта
   * @default true
   */
  use_standart_processing: XmlElem<boolean>;
  create_code: XmlElem<RequestTypeDocumentCreateCode | null>;
  /** Программный код, выполняемый при обработке заявки данного типа */
  processing_code: XmlElem<string | null>;
  /** Библиотека программного кода (метод onProcessing) */
  processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Программный код, выполняемый при отмене заявки данного типа */
  reject_processing_code: XmlElem<string | null>;
  /** Библиотека программного кода (метод onReject) */
  reject_processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Шаблон документа заявки */
  request_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Адрес перехода после подачи */
  reject_redirect_url: XmlElem<string | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
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
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** @temp */
  view: XmlElem<DescBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type RequestTypeDocument = XmlDocument & {
  TopElem: RequestTypeDocumentTopElem;
  request_type: RequestTypeDocumentTopElem;
  DocDesc(): string;
};
