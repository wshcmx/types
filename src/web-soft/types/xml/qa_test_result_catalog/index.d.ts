type QaTestResultCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тест программного кода */
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  /** Набор тестов программного кода */
  test_set_id: XmlElem<number | null, QaTestSetCatalogDocumentTopElem>;
  /** Набор параметров тестов программного кода */
  test_paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Статус работы */
  work_status: XmlElem<string | null, typeof common.qa_test_result_completion_states>;
  /** Статус успешности */
  finish_status: XmlElem<string | null, typeof common.qa_test_result_states>;
  /** Код ошибки */
  error_code: XmlElem<number | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
