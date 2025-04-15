interface QtiTestingSystemDocumentTestingSystem extends ExecCodeBase, MsParametersBase, AdminAccessBase {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ссылка на файл библиотеки функций */
  library_url: XmlElem<string | null>;
  /** Программный код */
  script: XmlElem<string | null>;
  /** Импортируемый */
  imported: XmlElem<boolean>;
  /** URL импорта */
  import_url: XmlElem<string | null>;
  /** Тип запуска теста */
  test_launch_type: XmlElem<string>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
}

type QtiTestingSystemDocumentTopElem = XmlTopElem & {
  Doc: QtiTestingSystemDocument;
};

type QtiTestingSystemDocument = XmlDocument & {
  TopElem: QtiTestingSystemDocumentTopElem;
  qti_testing_system: QtiTestingSystemDocumentTopElem;
  testing_system: XmlElem<QtiTestingSystemDocumentTestingSystem | null>;
  DocDesc(): string;
};
