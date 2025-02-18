interface CodeLibraryDocumentMethodBlockMethod extends WebVariablesBase {
  name: XmlElem<string | null>;
  description: XmlElem<string | null>;
}

interface CodeLibraryDocumentMethodBlock {
  /** Методы */
  methods: XmlMultiElem<CodeLibraryDocumentMethodBlockMethod | null>;
}

interface CodeLibraryDocumentAssociatedApplication {
  /** Приложение */
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
}

interface CodeLibraryDocumentParameterMap {
  /** Приложение */
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  /** Приложение */
  application_name: XmlElem<string | null>;
  /** Параметр библиотеки */
  library_param: XmlElem<string | null>;
  /** Параметр приложения */
  application_param: XmlElem<string | null>;
}

type CodeLibraryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase &
I18nBase & {
  Doc: CodeLibraryDocument;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
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
  /** Методы */
  method_block: XmlElem<CodeLibraryDocumentMethodBlock | null>;
  /** Ассоциированные приложения */
  associated_applications: XmlMultiElem<CodeLibraryDocumentAssociatedApplication | null>;
  /** Сопоставление параметров */
  parameter_maps: XmlMultiElem<CodeLibraryDocumentParameterMap | null>;
  /** @temp */
  view: XmlElem<unknown | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type CodeLibraryDocument = XmlDocument & {
  TopElem: CodeLibraryDocumentTopElem;
  code_library: CodeLibraryDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  DocDesc(): string;
};
