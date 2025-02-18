type QaTestParamsetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestAssertBase & {
  Doc: QaTestParamsetDocument;
  /**
   * Статус
   * @default project
   */
  status: XmlElem<string, typeof common.qa_test_states>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type QaTestParamsetDocument = XmlDocument & {
  TopElem: QaTestParamsetDocumentTopElem;
  qa_test_paramset: QaTestParamsetDocumentTopElem;
  DocDesc(): string;
};
