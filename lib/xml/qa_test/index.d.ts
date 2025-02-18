type QaTestDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ObjectTypeBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string, typeof common.qa_test_states>;
  /**
   * Тип теста
   * @default catalog
   */
  type: XmlElem<string, typeof common.qa_test_types>;
  /** Библиотека програмного кода */
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Имя библиотеки кода */
  lib_name: XmlElem<string | null>;
  /** Имя функции */
  function_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type QaTestDocument = XmlDocument & {
  TopElem: QaTestDocumentTopElem;
  qa_test: QaTestDocumentTopElem;
  DocDesc(): string;
};
