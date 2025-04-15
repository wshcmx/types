type ServerAgentDocumentTopElem = XmlTopElem &
MsPeriodityBase &
WebVariablesBase &
ExecCodeBase &
CustomElemsBase & {
  Doc: ServerAgentDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Объект */
  obj: XmlElem<unknown | null>;
  /** Прикрепить к блоку */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /**
   * Тип агента
   * @default code
   */
  type: XmlElem<string, typeof common.server_agent_types>;
  run_code_url: XmlElem<string | null>;
  /** Выполняемый код */
  run_code: XmlElem<string | null>;
  run_agent(objectId: number, objectsIds: string, date: Date, inPlace: boolean, configuration: string): unknown;
  /** Выгрузка */
  discharge_id: XmlElem<number | null, DischargeCatalogDocumentTopElem>;
  user_assignment_id: XmlElem<number | null, UserAssignmentCatalogDocumentTopElem>;
  /** Схема импорта */
  import_excel_person_scheme_id: XmlElem<string | null, typeof lists.import_excel_person_schemes>;
  import_excel_id: XmlElem<number | null>;
  /** Сервер обмена данными */
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
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
  view: XmlElem<unknown | null>;
  /** @temp */
  converter: XmlElem<boolean | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type ServerAgentDocument = XmlDocument & {
  TopElem: ServerAgentDocumentTopElem;
  server_agent: ServerAgentDocumentTopElem;
  OnLoad_____(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
