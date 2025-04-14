interface RequestDocumentPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface RequestDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface RequestDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  is_main: XmlElem<boolean | null>;
}

interface RequestDocumentCustomElement {
  name: XmlElem<string | null>;
  title: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface RequestDocumentView {
  /**
   * @temp
   * @default common
   */
  selector: XmlElem<string>;
  /** @temp */
  workflow_state: XmlElem<string>;
  /** @temp */
  workflow_action_result: XmlElem<unknown | null>;
  /**
   * @temp
   * @default false
   */
  workflow_create_break: XmlElem<boolean>;
}

type RequestDocumentTopElem = XmlTopElem &
PersonFillingBase &
KnowledgePartsBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RequestDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Тип заявки */
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Тип объекта */
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  /**
   * Статус
   * @default active
   */
  status_id: XmlElem<string, typeof common.request_status_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата закрытия */
  close_date: XmlElem<Date | null>;
  /** Предполагаемая дата закрытия */
  plan_close_date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Код объекта */
  object_code: XmlElem<string | null>;
  /** Дата */
  object_start_date: XmlElem<Date | null>;
  /** @default id */
  object_type: XmlElem<string | null>;
  /**
   * Групповая заявка
   * @default false
   */
  is_group: XmlElem<boolean>;
  /** Сотрудники */
  persons: XmlMultiElem<RequestDocumentPerson | null>;
  person_num(): number;
  /** Группы */
  groups: XmlMultiElem<RequestDocumentGroup | null>;
  workflow_matchings: XmlMultiElem<RequestDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** @default false */
  is_create_init: XmlElem<boolean | null>;
  custom_elements: XmlMultiElem<RequestDocumentCustomElement | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** @temp */
  view: XmlElem<RequestDocumentView | null>;
  /** @temp */
  list_variant: XmlElem<unknown | null>;
  /** @temp */
  rows: XmlElem<unknown | null>;
  /**
   * @temp
   * @default fullname
   */
  row_disp_elem: XmlElem<string>;
  /**
   * @temp
   * @default .Env.ListElem
   */
  row_list_field: XmlElem<string | null>;
  /**
   * @temp
   * @default .PrimaryKey
   */
  row_key_field: XmlElem<string | null>;
  start_action(type: string): number;
};

type RequestDocument = XmlDocument & {
  TopElem: RequestDocumentTopElem;
  request: RequestDocumentTopElem;
  OnLocalInit(): void;
  OnCreate(): void;
  OnSave(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
