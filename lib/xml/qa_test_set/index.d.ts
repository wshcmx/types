interface QaTestSetDocumentTest {
  id: XmlElem<string | null>;
  /** Тест программного кода */
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  /** Набор параметров */
  paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
}

type QaTestSetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestSetDocument;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string, typeof common.qa_test_states>;
  tests: XmlMultiElem<QaTestSetDocumentTest | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null, RoleCatalogDocumentTopElem>;
};

type QaTestSetDocument = XmlDocument & {
  TopElem: QaTestSetDocumentTopElem;
  qa_test_set: QaTestSetDocumentTopElem;
  DocDesc(): string;
};
